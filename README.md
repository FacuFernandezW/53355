# Analizador de Lenguaje de Flujo de Trabajo

## Descripción
Analizador léxico, sintáctico e intérprete para un lenguaje de flujo de trabajo, implementado con ANTLR4 y JavaScript.

## Requisitos previos
- Node.js (versión 16 o superior)
- Instalar ANTLR4 globalmente: npm install -g antlr4

## Instalación

1. Clonar el repositorio:
   git clone https://github.com/FacuFernandezW/53355.git

2. Entrar a la carpeta:
   cd 53355

3. Instalar dependencias:
   npm install

4. Generar el parser y lexer:
   antlr4 -Dlanguage=JavaScript Workflow.g4

## Ejecución

Para ejecutar el analizador:
   npm start

El programa lee el archivo input.txt por defecto.

## Cómo probar los ejemplos

Ejemplo correcto 1 (flujo Tesis):
   cp ejemplos/correcto1.txt input.txt
   npm start

Ejemplo correcto 2 (flujo Vacaciones):
   cp ejemplos/correcto2.txt input.txt
   npm start

Ejemplo con error (falta punto y coma):
   cp ejemplos/error1.txt input.txt
   npm start

Ejemplo con error (permiso inválido):
   cp ejemplos/error2.txt input.txt
   npm start

EN CASO DE NO QUERER HACERLO CON UN SCRIPT:
Deberán copiar el contenido de correcto1.txt y pegarlo en input.txt, lo mismo para el correcto2.txt, error1.txt y error2.txt

## Salida del programa
- Tabla de lexemas-tokens
- Análisis sintáctico (correcto/incorrecto con línea y causa)
- Árbol de análisis sintáctico
- Código JavaScript generado
- Ejecución del intérprete

## Tecnologías
- ANTLR4
- JavaScript (ES6+)
- Node.js

## Autor
Facundo Fernandez
Legajo: 53355