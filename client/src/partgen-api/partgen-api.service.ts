// Imports core
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PGInfo, PGLilyPond, PGMidi2Mp3} from './partgen-api.interfaces';


@Injectable()
export class PartGenAPI {

    private apiDomain = '192.168.99.100';
    private apiVersion = 1;

    constructor(private http: HttpClient) {}

    // ---- Construction de l'URL du End Point

    private getAPIURL() {
        return 'http://' + this.apiDomain + '/api/v' + this.apiVersion + '/';
    }

    private getAPIEP(service, action) {
        return this.getAPIURL() + service + '/' + action;
    }


    // ---- Infos des services

    private serviceInfo(service): Observable<PGInfo> {
        const url = this.getAPIEP(service, 'info');
        return this.http.get<PGInfo>(url);
    }

    public lilypondInfo(): Observable<PGInfo> {
        return this.serviceInfo('lilypond');
    }

    public midi2mp3Info(): Observable<PGInfo> {
        return this.serviceInfo('midi2mp3');
    }


    // ---- Appel des services

    private getPostHeaders() {
        return new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    }

    public lilypond(lpData): Observable<PGLilyPond> {
        const url = this.getAPIEP('lilypond', 'convert');
        const headers = this.getPostHeaders();
        return this.http.post<PGLilyPond>(url, {lpData: lpData}, {headers});
    }

    public midi2mp3(base64MidiData, soundfont= 'bagpipes'): Observable<PGMidi2Mp3> {
        const url = this.getAPIEP('midi2mp3', 'convert');
        const headers = this.getPostHeaders();
        return this.http.post<PGMidi2Mp3>(url, {base64MidiData: base64MidiData, soundfont: soundfont}, {headers});
    }

}
