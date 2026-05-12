import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import WorkflowLexer from "./generated/WorkflowLexer.js";
import WorkflowParser from "./generated/WorkflowParser.js";
import { CustomWorkflowVisitor } from "./CustomWorkflowVisitor.js";
import fs from 'fs';
import readline from 'readline';

class CustomErrorListener {
    constructor() {
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        this.errors.push({ 
            line: line, 
            column: column, 
            message: msg, 
            offendingText: offendingSymbol?.text || "" 
        });
    }

    hasErrors() { 
        return this.errors.length > 0; 
    }

    printErrors() {
        console.error("\n❌ ERRORES DE SINTAXIS:");
        for (const err of this.errors) {
            console.error(`   Línea ${err.line}, columna ${err.column}: ${err.message}`);
            if (err.offendingText) {
                console.error(`   → Token problemático: "${err.offendingText}"`);
            }
        }
    }
}

function mostrarTablaTokens(input) {
    console.log("\n=== TABLA DE LEXEMAS - TOKENS ===");
    console.log("LEXEMA".padEnd(30) + "TOKEN");
    console.log("-".repeat(50));

    const tempInputStream = CharStreams.fromString(input);
    let tempLexer = new WorkflowLexer(tempInputStream);
    let tempStream = new CommonTokenStream(tempLexer);
    tempStream.fill();
    let tokens = tempStream.getTokens(0, tempStream.size - 1);

    const symbolicNames = tempLexer.symbolicNames || [];
    
    for (let token of tokens) {
        let tipo;
        const tokenType = token.type;
        
        if (tokenType === -1) {
            tipo = "EOF";
        } else if (tokenType === WorkflowLexer.ID) {
            tipo = "ID";
        } else if (tokenType === WorkflowLexer.NUMERO) {
            tipo = "NUMERO";
        } else if (tokenType === WorkflowLexer.STRING) {
            tipo = "STRING";
        } else if (tokenType === WorkflowLexer.BOOLEANO) {
            tipo = "BOOLEANO";
        } else if (tokenType === WorkflowLexer.WS) {
            tipo = "WS(ignorado)";
        } else if (symbolicNames[tokenType]) {
            tipo = symbolicNames[tokenType];
        } else {
            tipo = `'${token.text}'`;
        }
        
        if (tipo !== "WS(ignorado)") {
            console.log(token.text.padEnd(30) + tipo);
        }
    }
}

async function leerCadena() {
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout 
    });
    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function main() {
    let input;
    
    try {
        input = fs.readFileSync('input.txt', 'utf8');
        console.log("📁 Leyendo desde input.txt");
    } catch (err) {
        console.log("📝 No se encontró input.txt, ingrese el código manualmente:");
        input = await leerCadena();
    }

    console.log("\n=== CÓDIGO FUENTE ===\n" + input + "\n");

    mostrarTablaTokens(input);

    const inputStream = CharStreams.fromString(input);
    const lexer = new WorkflowLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new WorkflowParser(tokenStream);
    parser.buildParseTrees = true;
    
    const errorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    
    const tree = parser.programa();

    if (errorListener.hasErrors() || parser.syntaxErrorsCount > 0) {
        errorListener.printErrors();
        console.error("\n❌ La entrada contiene errores de sintaxis.");
        console.error("   Revise el código e intente nuevamente.");
        return;
    }

    console.log("\n✅ ANÁLISIS SINTÁCTICO CORRECTO");
    console.log("✅ No se encontraron errores de sintaxis.\n");

    console.log("=== ÁRBOL DE ANÁLISIS SINTÁCTICO (formato texto) ===");
    console.log(tree.toStringTree(parser.ruleNames));
    console.log("\n");

    const visitor = new CustomWorkflowVisitor();
    const outputJS = visitor.visit(tree);

    console.log("=== CÓDIGO JAVASCRIPT GENERADO ===");
    console.log(outputJS.join("\n"));

    console.log("\n=== EJECUCIÓN DEL INTÉRPRETE ===");
    try {
        eval(outputJS.join("\n"));
    } catch (e) {
        console.error("Error en la ejecución:", e.message);
    }
}

main();