// Imports core
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MMInfo, MMConvert, MMLog, MMStatusCode} from './midi2mp3-api.interfaces';


@Injectable()
export class Midi2mp3API {

    private endPoint = 'http://192.168.99.100/api/v1/midi2mp3';

    constructor(private http: HttpClient) {}

    private info(): Observable<MMInfo> {
        const url = this.endPoint + '/info';
        return this.http.get<MMInfo>(url);
    }

    public convert(base64MidiData, soundfont): Observable<MMConvert> {
        const url = this.endPoint + '/convert';
        const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
        return this.http.post<MMConvert>(url, {base64MidiData: base64MidiData, soundfont: soundfont}, {headers});
    }

}
