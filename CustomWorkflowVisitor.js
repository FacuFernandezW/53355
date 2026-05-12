import WorkflowVisitor from "./generated/WorkflowVisitor.js";

export class CustomWorkflowVisitor extends WorkflowVisitor {
    constructor() {
        super();
        this.memory = new Map();      // Para valores de variables
        this.declared = new Map();    // Para saber qué variables ya fueron declaradas
        this.outputJS = [];
    }

    visitPrograma(ctx) {
        console.log("\n=== ANÁLISIS SINTÁCTICO EXITOSO ===\n");
        this.outputJS.push("// Código JavaScript generado\n");
        this.visitChildren(ctx);
        return this.outputJS;
    }

    visitEstado(ctx) {
        const nombre = ctx.ID().getText();
        const tipo = ctx.getChild(2)?.getText() || "normal";
        this.outputJS.push(`console.log("📌 Estado: ${nombre} (${tipo})");`);
        console.log(`✓ Estado: ${nombre} [${tipo}]`);
    }

    visitRol(ctx) {
        const nombre = ctx.ID().getText();
        const permisos = ctx.permiso().map(p => p.getText());
        this.outputJS.push(`console.log("👤 Rol: ${nombre} → puede ${permisos.join(', ')}");`);
        console.log(`✓ Rol: ${nombre} → puede ${permisos.join(', ')}`);
    }

    visitTransicion(ctx) {
        const desde = ctx.ID(0).getText();
        const hacia = ctx.ID(1).getText();
        let condicion = "";
        
        const condCtx = ctx.condicion();
        
        if (condCtx.permiso()) {
            condicion = `${condCtx.ID().getText()}.${condCtx.permiso().getText()}`;
        } 
        else if (condCtx.valor()) {
            let izquierdo = condCtx.getChild(0).getText();
            let valor = condCtx.valor().getText();
            condicion = `${izquierdo} == ${valor}`;
        }
        
        const condicionEscapada = condicion.replace(/"/g, '\\"');
        this.outputJS.push(`console.log("🔄 Transición: ${desde} → ${hacia} cuando ${condicionEscapada}");`);
        console.log(`✓ Transición: ${desde} → ${hacia} [${condicion}]`);
    }

    visitAccion(ctx) {
        const nombre = ctx.ID().getText();
        this.outputJS.push(`console.log("⚡ Acción: ${nombre}");`);
        console.log(`✓ Acción: ${nombre}`);
        this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        // Instrucción: asignar
        if (ctx.getChild(0) && ctx.getChild(0).getText() === 'asignar') {
            const id = ctx.getChild(1).getText();
            let valor = ctx.valor().getText();
            
            // Si la variable no fue declarada aún, usar "let"
            if (!this.declared.has(id)) {
                this.declared.set(id, true);
                this.outputJS.push(`let ${id} = ${valor};`);
            } else {
                this.outputJS.push(`${id} = ${valor};`);
            }
            this.outputJS.push(`console.log("  📝 ${id} = " + ${valor});`);
            console.log(`  → Asignar ${id} = ${valor}`);
        } 
        // Instrucción: registrar
        else if (ctx.getChild(0) && ctx.getChild(0).getText() === 'registrar') {
            const texto = ctx.STRING().getText();
            this.outputJS.push(`console.log(${texto});`);
            console.log(`  → Registrar ${texto}`);
        }
        // Instrucción: notificar
        else if (ctx.getChild(0) && ctx.getChild(0).getText() === 'notificar') {
            const id = ctx.getChild(1).getText();
            const msg = ctx.STRING().getText();
            this.outputJS.push(`console.log("📧 Notificación a ${id}: " + ${msg});`);
            console.log(`  → Notificar ${id}: ${msg}`);
        }
    }

    visitNotificacion(ctx) {
        const id = ctx.getChild(1).getText();
        const msg = ctx.STRING().getText();
        this.outputJS.push(`console.log("📧 Notificación a ${id}: " + ${msg});`);
        console.log(`✓ Notificación: ${id} → ${msg}`);
    }
}