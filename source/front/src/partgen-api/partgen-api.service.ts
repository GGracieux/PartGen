// Imports core
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/Rx";
import {PGInfo, PGConvert} from './partgen-api.model';

@Injectable()
export class PartGenAPI {

    private apiDomain = '192.168.99.100';
    private apiVersion = 1;

    constructor(private http: Http) {}

    // ---- Construction de l'URL du End Point

    private getAPIURL() {
        return 'http://' + this.apiDomain + '/api/v' + this.apiVersion + '/';
    }

    private getAPIEP(service, action) {
        return this.getAPIURL() + service + '/' + action;
    }


    // ---- Infos des services

    private serviceInfoa(service) {
        let url = this.getAPIEP(service, 'info');
        return this.http.get(url);
    }

    private serviceInfo(service): Observable<PGInfo> {
        let url = this.getAPIEP(service, 'info');
        return this.http
            .get(url)
            .map(res => (res.json() as PGInfo));
    }

    public cnb2lpInfo(): Observable<PGInfo> {
        return this.serviceInfo('cnb2lp');
    }

    public lilypondInfo(): Observable<PGInfo> {
        return this.serviceInfo('lilypond');
    }

    public midi2mp3Info(): Observable<PGInfo> {
        return this.serviceInfo('midi2mp3');
    }


    // ---- Appel des services

    public cnb2lp(data): Observable<PGConvert> {
        let url = this.getAPIEP('cnb2lp', 'convert');
        return this.http
            .post(url, {data:data})
            .map(res => (res.json() as PGConvert));
    }

    public lilypond(data): Observable<PGConvert> {
        let url = this.getAPIEP('lilypond', 'convert');
        return this.http
            .post(url, {data:data})
            .map(res => (res.json() as PGConvert));
    }

    public midi2mp3(data, soundfont='bagpipes'): Observable<PGConvert> {
        let url = this.getAPIEP('lilypond', 'convert');
        return this.http
            .post(url, {data:data, soundfont:soundfont})
            .map(res => (res.json() as PGConvert));
    }

}
