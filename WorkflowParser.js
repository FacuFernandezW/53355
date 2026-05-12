// Generated from Workflow.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import WorkflowListener from './WorkflowListener.js';
const serializedATN = [4,1,36,115,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,5,0,
27,8,0,10,0,12,0,30,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,40,8,1,1,2,1,
2,1,2,3,2,45,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,56,8,3,10,3,12,
3,59,9,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,1,6,3,6,80,8,6,1,7,1,7,1,7,1,7,5,7,86,8,7,10,7,12,7,89,9,7,1,7,1,
7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,105,8,8,1,9,1,9,1,
9,1,9,1,9,1,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,3,1,0,
5,6,1,0,13,17,1,0,31,34,114,0,22,1,0,0,0,2,39,1,0,0,0,4,41,1,0,0,0,6,48,
1,0,0,0,8,63,1,0,0,0,10,65,1,0,0,0,12,79,1,0,0,0,14,81,1,0,0,0,16,104,1,
0,0,0,18,106,1,0,0,0,20,112,1,0,0,0,22,23,5,1,0,0,23,24,5,32,0,0,24,28,5,
2,0,0,25,27,3,2,1,0,26,25,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,
0,0,29,31,1,0,0,0,30,28,1,0,0,0,31,32,5,3,0,0,32,33,5,0,0,1,33,1,1,0,0,0,
34,40,3,4,2,0,35,40,3,6,3,0,36,40,3,10,5,0,37,40,3,14,7,0,38,40,3,18,9,0,
39,34,1,0,0,0,39,35,1,0,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,
3,1,0,0,0,41,42,5,4,0,0,42,44,5,32,0,0,43,45,7,0,0,0,44,43,1,0,0,0,44,45,
1,0,0,0,45,46,1,0,0,0,46,47,5,7,0,0,47,5,1,0,0,0,48,49,5,8,0,0,49,50,5,32,
0,0,50,51,5,9,0,0,51,52,5,10,0,0,52,57,3,8,4,0,53,54,5,11,0,0,54,56,3,8,
4,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,
0,59,57,1,0,0,0,60,61,5,12,0,0,61,62,5,7,0,0,62,7,1,0,0,0,63,64,7,1,0,0,
64,9,1,0,0,0,65,66,5,18,0,0,66,67,5,32,0,0,67,68,5,19,0,0,68,69,5,32,0,0,
69,70,5,20,0,0,70,71,3,12,6,0,71,72,5,7,0,0,72,11,1,0,0,0,73,74,5,32,0,0,
74,75,5,21,0,0,75,80,3,8,4,0,76,77,5,32,0,0,77,78,5,22,0,0,78,80,3,20,10,
0,79,73,1,0,0,0,79,76,1,0,0,0,80,13,1,0,0,0,81,82,5,23,0,0,82,83,5,32,0,
0,83,87,5,2,0,0,84,86,3,16,8,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,
87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,3,0,0,91,15,1,0,0,0,92,
93,5,24,0,0,93,94,5,4,0,0,94,95,5,25,0,0,95,96,3,20,10,0,96,97,5,7,0,0,97,
105,1,0,0,0,98,99,5,26,0,0,99,100,5,27,0,0,100,101,5,34,0,0,101,102,5,28,
0,0,102,105,5,7,0,0,103,105,3,18,9,0,104,92,1,0,0,0,104,98,1,0,0,0,104,103,
1,0,0,0,105,17,1,0,0,0,106,107,5,29,0,0,107,108,5,32,0,0,108,109,5,30,0,
0,109,110,5,34,0,0,110,111,5,7,0,0,111,19,1,0,0,0,112,113,7,2,0,0,113,21,
1,0,0,0,7,28,39,44,57,79,87,104];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class WorkflowParser extends antlr4.Parser {

    static grammarFileName = "Workflow.g4";
    static literalNames = [ null, "'flujo'", "'{'", "'}'", "'estado'", "'inicial'", 
                            "'final'", "';'", "'rol'", "'puede'", "'['", 
                            "','", "']'", "'crear'", "'revisar'", "'aprobar'", 
                            "'rechazar'", "'archivar'", "'desde'", "'hacia'", 
                            "'cuando'", "'.'", "'=='", "'accion'", "'asignar'", 
                            "'='", "'registrar'", "'('", "')'", "'notificar'", 
                            "'con'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "BOOLEANO", 
                             "ID", "NUMERO", "STRING", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "programa", "definicion", "estado", "rol", "permiso", 
                         "transicion", "condicion", "accion", "instruccion", 
                         "notificacion", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = WorkflowParser.ruleNames;
        this.literalNames = WorkflowParser.literalNames;
        this.symbolicNames = WorkflowParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, WorkflowParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(WorkflowParser.T__0);
	        this.state = 23;
	        this.match(WorkflowParser.ID);
	        this.state = 24;
	        this.match(WorkflowParser.T__1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 545521936) !== 0)) {
	            this.state = 25;
	            this.definicion();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
	        this.match(WorkflowParser.T__2);
	        this.state = 32;
	        this.match(WorkflowParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definicion() {
	    let localctx = new DefinicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, WorkflowParser.RULE_definicion);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.estado();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.rol();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.transicion();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.accion();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 38;
	            this.notificacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, WorkflowParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(WorkflowParser.T__3);
	        this.state = 42;
	        this.match(WorkflowParser.ID);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===6) {
	            this.state = 43;
	            _la = this._input.LA(1);
	            if(!(_la===5 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 46;
	        this.match(WorkflowParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rol() {
	    let localctx = new RolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, WorkflowParser.RULE_rol);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(WorkflowParser.T__7);
	        this.state = 49;
	        this.match(WorkflowParser.ID);
	        this.state = 50;
	        this.match(WorkflowParser.T__8);
	        this.state = 51;
	        this.match(WorkflowParser.T__9);
	        this.state = 52;
	        this.permiso();
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 53;
	            this.match(WorkflowParser.T__10);
	            this.state = 54;
	            this.permiso();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
	        this.match(WorkflowParser.T__11);
	        this.state = 61;
	        this.match(WorkflowParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	permiso() {
	    let localctx = new PermisoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, WorkflowParser.RULE_permiso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 253952) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transicion() {
	    let localctx = new TransicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, WorkflowParser.RULE_transicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(WorkflowParser.T__17);
	        this.state = 66;
	        this.match(WorkflowParser.ID);
	        this.state = 67;
	        this.match(WorkflowParser.T__18);
	        this.state = 68;
	        this.match(WorkflowParser.ID);
	        this.state = 69;
	        this.match(WorkflowParser.T__19);
	        this.state = 70;
	        this.condicion();
	        this.state = 71;
	        this.match(WorkflowParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, WorkflowParser.RULE_condicion);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.match(WorkflowParser.ID);
	            this.state = 74;
	            this.match(WorkflowParser.T__20);
	            this.state = 75;
	            this.permiso();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.match(WorkflowParser.ID);
	            this.state = 77;
	            this.match(WorkflowParser.T__21);
	            this.state = 78;
	            this.valor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, WorkflowParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(WorkflowParser.T__22);
	        this.state = 82;
	        this.match(WorkflowParser.ID);
	        this.state = 83;
	        this.match(WorkflowParser.T__1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 620756992) !== 0)) {
	            this.state = 84;
	            this.instruccion();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(WorkflowParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, WorkflowParser.RULE_instruccion);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.match(WorkflowParser.T__23);
	            this.state = 93;
	            this.match(WorkflowParser.T__3);
	            this.state = 94;
	            this.match(WorkflowParser.T__24);
	            this.state = 95;
	            this.valor();
	            this.state = 96;
	            this.match(WorkflowParser.T__6);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.match(WorkflowParser.T__25);
	            this.state = 99;
	            this.match(WorkflowParser.T__26);
	            this.state = 100;
	            this.match(WorkflowParser.STRING);
	            this.state = 101;
	            this.match(WorkflowParser.T__27);
	            this.state = 102;
	            this.match(WorkflowParser.T__6);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.notificacion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notificacion() {
	    let localctx = new NotificacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, WorkflowParser.RULE_notificacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(WorkflowParser.T__28);
	        this.state = 107;
	        this.match(WorkflowParser.ID);
	        this.state = 108;
	        this.match(WorkflowParser.T__29);
	        this.state = 109;
	        this.match(WorkflowParser.STRING);
	        this.state = 110;
	        this.match(WorkflowParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, WorkflowParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 15) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

WorkflowParser.EOF = antlr4.Token.EOF;
WorkflowParser.T__0 = 1;
WorkflowParser.T__1 = 2;
WorkflowParser.T__2 = 3;
WorkflowParser.T__3 = 4;
WorkflowParser.T__4 = 5;
WorkflowParser.T__5 = 6;
WorkflowParser.T__6 = 7;
WorkflowParser.T__7 = 8;
WorkflowParser.T__8 = 9;
WorkflowParser.T__9 = 10;
WorkflowParser.T__10 = 11;
WorkflowParser.T__11 = 12;
WorkflowParser.T__12 = 13;
WorkflowParser.T__13 = 14;
WorkflowParser.T__14 = 15;
WorkflowParser.T__15 = 16;
WorkflowParser.T__16 = 17;
WorkflowParser.T__17 = 18;
WorkflowParser.T__18 = 19;
WorkflowParser.T__19 = 20;
WorkflowParser.T__20 = 21;
WorkflowParser.T__21 = 22;
WorkflowParser.T__22 = 23;
WorkflowParser.T__23 = 24;
WorkflowParser.T__24 = 25;
WorkflowParser.T__25 = 26;
WorkflowParser.T__26 = 27;
WorkflowParser.T__27 = 28;
WorkflowParser.T__28 = 29;
WorkflowParser.T__29 = 30;
WorkflowParser.BOOLEANO = 31;
WorkflowParser.ID = 32;
WorkflowParser.NUMERO = 33;
WorkflowParser.STRING = 34;
WorkflowParser.WS = 35;
WorkflowParser.LINE_COMMENT = 36;

WorkflowParser.RULE_programa = 0;
WorkflowParser.RULE_definicion = 1;
WorkflowParser.RULE_estado = 2;
WorkflowParser.RULE_rol = 3;
WorkflowParser.RULE_permiso = 4;
WorkflowParser.RULE_transicion = 5;
WorkflowParser.RULE_condicion = 6;
WorkflowParser.RULE_accion = 7;
WorkflowParser.RULE_instruccion = 8;
WorkflowParser.RULE_notificacion = 9;
WorkflowParser.RULE_valor = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_programa;
    }

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	EOF() {
	    return this.getToken(WorkflowParser.EOF, 0);
	};

	definicion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinicionContext);
	    } else {
	        return this.getTypedRuleContext(DefinicionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class DefinicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_definicion;
    }

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	rol() {
	    return this.getTypedRuleContext(RolContext,0);
	};

	transicion() {
	    return this.getTypedRuleContext(TransicionContext,0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	notificacion() {
	    return this.getTypedRuleContext(NotificacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterDefinicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitDefinicion(this);
		}
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_estado;
    }

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitEstado(this);
		}
	}


}



class RolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_rol;
    }

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	permiso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PermisoContext);
	    } else {
	        return this.getTypedRuleContext(PermisoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterRol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitRol(this);
		}
	}


}



class PermisoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_permiso;
    }


	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterPermiso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitPermiso(this);
		}
	}


}



class TransicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_transicion;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WorkflowParser.ID);
	    } else {
	        return this.getToken(WorkflowParser.ID, i);
	    }
	};


	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterTransicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitTransicion(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_condicion;
    }

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	permiso() {
	    return this.getTypedRuleContext(PermisoContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_accion;
    }

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitAccion(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_instruccion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	STRING() {
	    return this.getToken(WorkflowParser.STRING, 0);
	};

	notificacion() {
	    return this.getTypedRuleContext(NotificacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class NotificacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_notificacion;
    }

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	STRING() {
	    return this.getToken(WorkflowParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterNotificacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitNotificacion(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WorkflowParser.RULE_valor;
    }

	STRING() {
	    return this.getToken(WorkflowParser.STRING, 0);
	};

	NUMERO() {
	    return this.getToken(WorkflowParser.NUMERO, 0);
	};

	BOOLEANO() {
	    return this.getToken(WorkflowParser.BOOLEANO, 0);
	};

	ID() {
	    return this.getToken(WorkflowParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WorkflowListener ) {
	        listener.exitValor(this);
		}
	}


}




WorkflowParser.ProgramaContext = ProgramaContext; 
WorkflowParser.DefinicionContext = DefinicionContext; 
WorkflowParser.EstadoContext = EstadoContext; 
WorkflowParser.RolContext = RolContext; 
WorkflowParser.PermisoContext = PermisoContext; 
WorkflowParser.TransicionContext = TransicionContext; 
WorkflowParser.CondicionContext = CondicionContext; 
WorkflowParser.AccionContext = AccionContext; 
WorkflowParser.InstruccionContext = InstruccionContext; 
WorkflowParser.NotificacionContext = NotificacionContext; 
WorkflowParser.ValorContext = ValorContext; 
