// Imports core
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LPInfo, LPConvert, LPLog, LPStatusCode} from './lilypond-api.interfaces';


@Injectable()
export class LilyPondAPI {

    private endPoint = 'http://' + window.location.hostname + '/api/v1/lilypond';

    constructor(private http: HttpClient) {}

    private info(): Observable<LPInfo> {
        const url = this.endPoint + '/info';
        return this.http.get<LPInfo>(url);
    }

    public convert(lpData): Observable<LPConvert> {
        const url = this.endPoint + '/convert';
        const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
        return this.http.post<LPConvert>(url, {lpData: lpData}, {headers});
    }

}
