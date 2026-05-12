grammar Workflow;

// Reglas del parser
programa
    : 'flujo' ID '{' definicion* '}' EOF
    ;

definicion
    : estado
    | rol
    | transicion
    | accion
    | notificacion
    ;

estado
    : 'estado' ID ('inicial' | 'final')? ';'
    ;

rol
    : 'rol' ID 'puede' '[' permiso (',' permiso)* ']' ';'
    ;

permiso
    : 'crear'
    | 'revisar'
    | 'aprobar'
    | 'rechazar'
    | 'archivar'
    ;

transicion
    : 'desde' ID 'hacia' ID 'cuando' condicion ';'
    ;

condicion
    : ID '.' permiso
    | (ID | 'estado') '==' valor
    ;

accion
    : 'accion' ID '{' instruccion* '}'
    ;

instruccion
    : 'asignar' (ID | 'estado') '=' valor ';'
    | 'registrar' '(' STRING ')' ';'
    | 'notificar' (ID | 'estado') 'con' STRING ';'
    ;

notificacion
    : 'notificar' (ID | 'estado') 'con' STRING ';'
    ;

valor
    : STRING
    | NUMERO
    | BOOLEANO
    | ID
    | 'estado'
    ;

// Tokens (lexer)
BOOLEANO
    : 'verdadero'
    | 'falso'
    ;

ID
    : [a-zA-Z][a-zA-Z0-9_]*
    ;

NUMERO
    : [0-9]+
    ;

STRING
    : '"' (~["\\] | '\\' .)* '"'
    ;

WS
    : [ \t\n\r]+ -> skip
    ;

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;