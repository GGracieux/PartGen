// Imports core
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class PartGenAPI {

    private apiDomain = '192.168.99.100';
    private apiVersion = 1;

    constructor(private http: Http) {}

    private getAPIURL() {
        return 'http://' + this.apiDomain + '/api/v' + this.apiVersion + '/';
    }

    private getAPIEP(service, action) {
        return this.getAPIURL() + service + '/' + action;
    }

    public info(service) {
        let url = this.getAPIEP(service, 'info');
        return this.http.get(url);
    }

    public convert(service, data) {
        let url = this.getAPIEP('service', 'convert');
        return this.http.post(url,{data:data});
    }

}
