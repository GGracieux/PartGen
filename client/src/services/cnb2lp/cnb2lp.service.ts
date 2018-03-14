// Imports core
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CNBConvert, CNBStatusCode} from './cnb2lp.interfaces';
import 'rxjs/add/observable/of';


@Injectable()
export class Cnb2lpService {

    // armure par défaut
    private currKey = 'mibM';

    // tableau de correspondance des notes
    private notesConv;



    // ----- Initialisation tableau de correspondance des notes

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
            'fa#M':  this.getConvBemol(0, 0, 0, 0, 0, 0, 0),
            'do#M':  this.getConvBemol(0, 0, 0, 0, 0, 0, 0)
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
            'fa#M':  this.getConvDiese(1, 1, 1, 1, 1, 1, 0),
            'do#M':  this.getConvDiese(1, 1, 1, 1, 1, 1, 1)
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
        return this.getConv('#',nsi, nla, nsol, nfa, nmi, nre, ndo, nsi, nla);
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


    //--------------------------------
    // TRAITEMENT
    //--------------------------------

    public convert(cnbData): Observable<CNBConvert> {
        return Observable.of<CNBConvert>(this.doConvert(cnbData));
    }

    // Lance la convertion
    private doConvert(content: string) {
        let result;
        try
        {
            let lpData = this.convertData(content);
			console.log(lpData);
            result = this.getConvertResponse(true, '', lpData, 'Convertion termiée');
        }
        catch (e)
        {
            result = this.getConvertResponse(false,'Erreur lors de la convertion', e.message);
        }
        return result;

    }

    // Converti un texte cnb en lp
    public convertData(content)
    {
        let tokens = this.getTokens(content);
        let LPTokens = [];
        for (let token of tokens) {
            LPTokens.push(this.convertToken(token));
        }
        return "\\score{ \\new Staff \\with {midiInstrument = #\"bagpipe\"} { " + LPTokens.join(' ') + " } \\layout{} \\midi{} }";
    }

    // Prepare la réponse du convert
    private getConvertResponse(success, message, lpData = null, logData = '') {

        // retourne la réponse formatté
        return {
            'statusCode': (success ? 'OK' : 'ERROR'),
            'message': message,
            'lpData': lpData,
            'log': logData
        };
    }

    // Récupération de la liste des tokens non convertis
    private getTokens(content)
    {
        content = this.replaceAll(String.fromCharCode(10), ' $ ', content);
        content = this.replaceAll(String.fromCharCode(13), '', content);
        content = this.replaceAll(String.fromCharCode(9), ' & ', content);
        content = this.replaceAll('  ', ' ', content);

        return content.split(' ');
    }

    // Converti un token
    private convertToken(token)
    {
        let first = token.substr(0,1);
        switch (first) {
            case '[':
                return this.convertVariable(token);
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
                return '\\break';
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

    private convertVariable(token)
    {
        if (this.isTokenVariable(token)) {
            token = this.replaceAll('[', '', token);
            token = this.replaceAll(']', '', token);
            let userVar = token.split('=');
            switch (userVar[0]) {
                case 'tempo':
                    return '\\tempo 4 = ' + userVar[1];
                case 'clef':
                case 'language':
                    return '\\' + userVar[0] + ' "' + userVar[1] + '"';
                case 'tonalite':
                    this.currKey = userVar[1];
                    return '\\key ' + userVar[1].substr(0,userVar[1].length-1) + ' \\major';
                default :
                    return '\\' + userVar[0] + ' ' + userVar[1];
            }
        } else if (this.isTokenTime(token)) {
            token = this.replaceAll('[', '', token);
            token = this.replaceAll(']', '', token);
            return '\\time ' + token;
        } else {
            throw "Token incorrect : " + token;
        }
    }

    private convertAnacrouse(token)
    {
        return '\\partial ' + token.substr(1);
    }

    private convertRepeat(token)
    {
        return '\\repeat volta ' + token.substr(1,token.length-2) +  ' {';
    }

    private convertAlternative(token)
    {
        return '\\alternative {';
    }

    private convertText(token)
    {
        return "\\mark \\markup { \\normalsize \\bold " + this.replaceAll('_', ' ', token) + ' }';

    }

    private convertSilence(token)
    {
        return 'r' + token.substr(1);
    }

    private convertNolet(token)
    {
        token = this.replaceAll('N', '', token);
        token = this.replaceAll('{', '', token);
        return '\\tuplet ' + token + ' {';
    }

    private convertGrace(token)
    {
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

    private convertNote(token)
    {
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
            this.notesConv['bemol'][this.currKey][note] +
            this.notesConv['diese'][this.currKey][note] +
            this.notesConv['hauteur'][note];
    }

    private isTokenVariable(token)
    {
        if (token.substr(0,1) != '[') return false;
        if (token.substr(token.length-1,1) != ']') return false;
        if (this.substrCount(token,'=') != 1) return false;
        return true;
    }

    private isTokenTime(token){
        if (token.substr(0,1) != '[') return false;
        if (token.substr(token.length-1,1) != ']') return false;
        if (this.substrCount(token,'/') != 1) return false;
        return true;
    }

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
}
