// Imports core
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CNBConvert, CNBStatusCode} from './cnb2lp.interfaces';
import 'rxjs/add/observable/of';


@Injectable()
export class Cnb2lpService {

    // score name
    private scoreName;

    // tableau de correspondance des notes
    private notesConv;

	// User variables
	private userVar;


    // ------------------------------------
    // - Initialization
    // ------------------------------------

    public constructor() {
        this.initNotesConv();
    }

    private initNotesConv() {

        let hauteur = this.getConv("'",1,1,1,1,1,1,1,0,0);
        let bemol = {
            'dobM':  this.getConvBemol(1, 1, 1, 1, 1, 1, 1),
            'solbM': this.getConvBemol(1, 1, 1, 1, 1, 1, 0),
            'rebM':  this.getConvBemol(1, 1, 1, 1, 1, 0, 0),
            'labM':  this.getConvBemol(1, 1, 1, 1, 0, 0, 0),
            'mibM':  this.getConvBemol(1, 1, 1, 0, 0, 0, 0),
            'sibM':  this.getConvBemol(1, 1, 0, 0, 0, 0, 0),
            'faM':   this.getConvBemol(1, 0, 0, 0, 0, 0, 0),
            'doM':   this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'solM':  this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'reM':   this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'laM':   this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'miM':   this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'siM':   this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'fadM':  this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'dodM':  this.getConvBemol(0, 0, 0, 0, 0, 0, 0)
        };
        let diese = {
            'dobM':  this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'solbM': this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'rebM':  this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'labM':  this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'mibM':  this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'sibM':  this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'faM':   this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'doM':   this.getConvDiese(0, 0, 0, 0, 0, 0, 0),
            'solM':  this.getConvDiese(1, 0, 0, 0, 0, 0, 0),
            'reM':   this.getConvDiese(1, 1, 0, 0, 0, 0, 0),
            'laM':   this.getConvDiese(1, 1, 1, 0, 0, 0, 0),
            'miM':   this.getConvDiese(1, 1, 1, 1, 0, 0, 0),
            'siM':   this.getConvDiese(1, 1, 1, 1, 1, 0, 0),
            'fadM':  this.getConvDiese(1, 1, 1, 1, 1, 1, 0),
            'dodM':  this.getConvDiese(1, 1, 1, 1, 1, 1, 1)
        };
        this.notesConv = {
            'hauteur': hauteur,
            'bemol': bemol,
            'diese': diese
        };

    }

    private getConvBemol (nsi, nmi, nla, nre, nsol, ndo, nfa) {
        return this.getConv('b',nsi, nla, nsol, nfa, nmi, nre, ndo, nsi, nla);
    }

    private getConvDiese (nfa, ndo, nsol, nre, nla, nmi, nsi) {
        return this.getConv('d',nsi, nla, nsol, nfa, nmi, nre, ndo, nsi, nla);
    }

    private getConv(symbol, nsi, nla, nsol, nfa, nmi, nre, ndo, nSI, nLA) {
        return {
            'si': this.getSymbol(symbol,nsi),
            'la': this.getSymbol(symbol,nla),
            'sol': this.getSymbol(symbol,nsol),
            'fa': this.getSymbol(symbol,nfa),
            'mi': this.getSymbol(symbol,nmi),
            're': this.getSymbol(symbol,nre),
            'do': this.getSymbol(symbol,ndo),
            'SI': this.getSymbol(symbol,nSI),
            'LA': this.getSymbol(symbol,nLA)
        };
    }

    private getSymbol(symbol, flag) {
        if (flag) return symbol;
        return '';
    }


    // ------------------------------------
    // - Processing
    // ------------------------------------

    public convert(cnbData:string, defaultScoreName:string = 'partition'): Observable<CNBConvert> {
        return Observable.of<CNBConvert>(this.doConvert(cnbData,defaultScoreName));
    }

    private doConvert(content: string, defaultScoreName:string) {

        this.scoreName = defaultScoreName;
        this.initUserVariables();
        let result;
        try
        {
            let conv = this.convertData(content);
            result = this.getConvertResponse(true, '', conv.data, conv.multiple,  'Convertion OK');
        }
        catch (e)
        {
            result = this.getConvertResponse(false,'Error while converting', "", false, e.message);
        }
        return result;

    }

    private initUserVariables() {
        this.userVar = {
            "titre" : "",
            "titre2": " ",
            "titreGauche": "" ,
            "titreDroite": "",
            "piedPage": "",
            "tempo": "",
            "clef": "G",
            "language": "français",
            "tonalite": "mibM",
            "indenterPremiere" : "non",
            "etirerDerniere" : "oui",
            "orientation" : "portrait"
        };
    }

    public convertData(content) {

        // Test presence of multiple scores
        var multiple = /-{4,}/;
        var multiScore = multiple.test(content);

        // Returns appropriate convertion
        if (multiScore) {
            return { "data" : this.convertDataMultiple(content), "multiple"  : true } ;
        } else {
            return { "data" : this.convertDataSimple(content), "multiple"  : false } ;
        }
    }

    private convertDataMultiple(content) {

        // Convert tokens
        let scores : string[] = [];
        let tokens = this.getTokens(content);
        let LPTokens = [];
        for (let token of tokens) {

            // getting token first char
            if ((token.length >= 4) && (token.substr(0,4) == '----')) {

                // score separator : rendering current score
                scores.push(this.renderCurrentScore(LPTokens));
                let footer = this.userVar['piedPage'];
				let orient = this.userVar['orientation'];
                this.initUserVariables();
                this.userVar['piedPage'] = footer;
				this.userVar['orientation'] = orient;
                LPTokens = [];

            } else {

                // current score token : adding to LPToken array
                let convToken = this.convertToken(token);
                if (convToken.length > 0) {
                    LPTokens.push(convToken);
                }
            }
        }

        // flushing last score
        scores.push(this.renderCurrentScore(LPTokens));


        // Assemblage
        let result = "\\version \"2.14.2\"\n" +
			this.composeOrientationHeader() + 
            "\n" + this.composePaperHeader() + "\n" +
            "\n" +
            "\\book {\n" +
            "\n" +
            "  \\paper {\n" +
            "    print-all-headers = ##t\n" +
            "  }\n" +
            "\n" +
            this.composeMultiScoreHeader() + "\n";

        result += scores.join("\n") + "\n}";

        return result;
    }

    private renderCurrentScore(tokens :string [] = []) {

        let score = "\n\\score {\n";
        score += " {\n";
        score += this.composeScoreHeader();
        score += tokens.join(' ') + "\n}\n";
        score += this.composeFileHeader();
        score += this.composeLayout();
        score += "\n}\n";
        score += "\\markup { \\vspace #1 }\n\n";
        return score;
    }

    private convertDataSimple(content) {

        // Convert tokens
        let tokens = this.getTokens(content);
        let LPTokens = [];
        for (let token of tokens) {
            let convToken = this.convertToken(token);
            if (convToken.length > 0) {
                LPTokens.push(convToken);
            }
        }

        // Assmeble file parts
        let result = "\\version \"2.14.2\"\n\n";
        result += this.composePaperHeader();
        result += this.composeFileHeader();
        result += this.composeOrientationHeader();
        result += this.composeLayout();
        result += "\nnotes = { \n";
        result += this.composeScoreHeader();
        result += LPTokens.join(' ');
        result += "} \n\n";
        result += this.composeLpPdfSection();
        result += this.composeLpMidiSection();

        return  result;
    }

    private getConvertResponse(success, message, lpData = null, multiple = false, logData = '') {

        // retourne la réponse formatté
        return {
            'statusCode': (success ? 'OK' : 'ERROR'),
            'scoreName': this.scoreName,
            'message': message,
            'lpData': lpData,
            'multiple' : multiple,
            'log': logData
        };
    }

    private getTokens(content) {
		let tokens: string[] = [];
		content = this.replaceAll(String.fromCharCode(13), '', content);
		let lines = content.split(String.fromCharCode(10));
		for (let line of lines) {
			line = line.trim();
			if (line.substr(0,1) == "#") {
				tokens.push(line);
            } else if (line.substr(0,1) != "%") {
				line = this.replaceAll('  ', ' ', line);
				line = this.replaceAll(String.fromCharCode(9), ' & ', line);		
				tokens = tokens.concat(line.split(' '));
                tokens.push('$');
			}		
		}
        return tokens;
    }


    // ------------------------------------
    // - Token convertion
    // ------------------------------------

    private convertToken(token) {
        let first = token.substr(0,1);
        switch (first) {
			case '':
				return '';
            case '#':				
                this.setVariable(token);				
				return '';
			case '[':
				return this.convertTime(token);
            case '@':
                return this.convertAnacrouse(token);
            case 'R':
                return this.convertRepeat(token);
            case 'A':
                return this.convertAlternative(token);
            case 'N':
                return this.convertNolet(token);
            case '"':
                return this.convertText(token);
            case '{':
                return '{';
            case '}':
                return '}';
            case '|':
                return this.convertBreak(token);
            case '$':
                return String.fromCharCode(10);
            case '&':
                return String.fromCharCode(9);
            case '-':
                return '~';
            case '=':
                return this.convertSilence(token);
            case '(':
                return this.convertGrace(token);
            default:
                return this.convertNote(token);
        }
    }
	
	private convertTime(token) {
		token = this.replaceAll('[', '', token);
		token = this.replaceAll(']', '', token);
		return '\\time ' + token;
	}

    private convertAnacrouse(token) {
        return '\\partial ' + token.substr(1);
    }

    private convertRepeat(token) {
        return '\\repeat volta ' + token.substr(1,token.length-2) +  ' {';
    }

    private convertAlternative(token) {
        return '\\alternative {';
    }

    private convertText(token) {
        return "\\mark \\markup { \\normalsize \\bold " + this.replaceAll('_', ' ', token) + ' }';

    }

    private convertBreak(token)
    {
        if (token == '||') {
            return "\\pageBreak";
        }
        return "\\break";
    }

    private convertSilence(token) {
        return 'r' + token.substr(1);
    }

    private convertNolet(token) {
        token = this.replaceAll('N', '', token);
        token = this.replaceAll('{', '', token);
        return '\\tuplet ' + token + ' {';
    }

    private convertGrace(token) {
        token = token.substr(1, token.length-2);
        let notes = token.split(',');
        let result = "\\grace{\\stemDown \\teeny " +  this.getConvertedNote(notes[0]) + '32';
        if (notes.length>1) {
            result += ' [';
            for (let i = 1; i < notes.length; i++) {
                result += this.getConvertedNote(notes[i]) + '32 ';
            }
            result += ' ]';
        }
        result += '}';

        return result;
    }

    private convertNote(token) {
        // nb de car pour la note
        let nb = 2;
        if (token.length>=3) {
            if (token.substr(0,3) == 'sol') nb = 3;
        }

        // recup de la note
        let note = token.substr(0,nb);

        // recup de la dree
        let duree = '4';
        if (token.length > nb) {
            duree = token.substr(nb);
        }
        return "\\stemUp \\normalsize " + this.getConvertedNote(note) + duree;
    }

    private getConvertedNote(note) {
        return  note.toLowerCase() +
            this.notesConv['bemol'][this.userVar['tonalite']][note] +
            this.notesConv['diese'][this.userVar['tonalite']][note] +
            this.notesConv['hauteur'][note];
    }

	private setVariable(token) {
	
		// gets variable name and content
		token = token.substr(1);
		let tokenPart = token.split('=');
		let key = tokenPart[0].trim();
		let val = tokenPart[1].trim();

		// sets user variable
		if (this.userVar.hasOwnProperty(key)) {
			this.userVar[key] = this.escapeUserVar(val);
		}

		// sets title
        if (key == 'titre') {
            this.scoreName = this.slugify(val);
        }
	}
	
	private escapeUserVar(value) {			
		let result = value;
		result = this.replaceAll("\\", "\\\\", result);
		result = this.replaceAll("\"", "\\\"", result);		
		return result;
	}


    // ------------------------------------
    // - Composing Lilypond file parts
    // ------------------------------------

    private composePaperHeader() {
        let paper = "\\paper {\n";
        paper += "  top-margin = 1.5 \\cm\n";
        paper += "  bottom-margin = 1.5 \\cm\n";
        paper += "}\n";
        return paper;
    }
	
	private composeFileHeader() {
		let header = "\\header {\n";
		header += "  title = \"" + this.userVar.titre + "\"\n";
		header += "  subtitle = \"" + this.userVar.titre2 + "\"\n";
		header += "  tagline = \"" + this.userVar.piedPage + "\"\n";
		header += "  meter = \"" + this.userVar.titreGauche + "\"\n";
		header += "  arranger = \"" + this.userVar.titreDroite + "\"\n";
		header += "}\n";
		return header;
	}
	
	private composeScoreHeader() {
		let header = "\n";
		header += " \\language \"" + this.userVar.language + "\"\n";
		if (this.userVar.tempo != "") {
			header += " \\tempo 4 = " + this.userVar.tempo + "\n";
		}				
		header += " \\clef \"" + this.userVar.clef + "\"\n";	
		header += " \\key " + this.userVar.tonalite.substr(0,this.userVar.tonalite.length -1) + " \\major\n";	
		return header;
	}	
	
	private composeLayout() {
		// Composing indent info
		let ident = "";
		if (this.userVar.indenterPremiere == "non") {
			ident = "  indent = #0\n";		
		}
	
		// Composing ragged-last info
		let ragged = "";	
		if (this.userVar.etirerDerniere == "non") {
			ragged = "  ragged-last = ##t\n";
		}		
		
		// Assembling
		let layout = "\n";
		layout += "\\layout {\n";
		layout += ident;
		layout += ragged;
		layout += "}\n";
		
		return layout;
	}	
	
	private composeOrientationHeader() {
		let orient = "";
		if (this.userVar.orientation == "paysage") {
			orient += "#(set-default-paper-size \"a4landscape\")\n";		
		} 
		return orient;
	}

    private composeMultiScoreHeader() {
        let header = "\\header {\n";
        header += "tagline = \"" + this.userVar['piedPage'] + "\"\n";
        header += "}\n";
        return header;
    }

    private composeLpPdfSection() {
        return "\\score  {\n"
            + "  \\new Staff  <<\n"
            + "    \\notes\n"
            + "    >>\n"
            + "  \\layout{}\n"
            + "}\n\n";
    }

    private composeLpMidiSection() {
        return "\\score  {\n"
            + "  \\unfoldRepeats\n"
            + "  \\new Staff  <<\n"
            + "    \\set Staff.midiInstrument = \"bagpipe\"\n"
            + "    \\notes\n"
            + "    >>\n"
            + "  \\midi{}\n"
            + "}\n\n";
    }


    // ------------------------------------
    // - Helpers
    // ------------------------------------

    private replaceAll(search, replace, subject) {
        return subject.split(search).join(replace);
    }

    private substrCount(subject, search): number{
        let nb = 0;
        let deb = subject.indexOf(search);
        while (deb != -1) {
            nb++;
            deb = subject.indexOf(search,++deb);
        }
        return nb;
    }

    private slugify(text)  {
        return text.toString().toLowerCase()
            .replace(/(\w)\'/g, '$1')           // Special case for apostrophes
            .replace(/[^a-z0-9_\-]+/g, '-')     // Replace all non-word chars with -
            .replace(/\-\-+/g, '-')             // Replace multiple - with single -
            .replace(/^-+/, '')                 // Trim - from start of text
            .replace(/-+$/, '');                // Trim - from end of text
    }
}
