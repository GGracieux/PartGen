// Imports core
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CNBConvert, CNBStatusCode} from './cnb2lp.interfaces';
import 'rxjs/add/observable/of';


@Injectable()
export class Cnb2lpService {

    public convert(cnbData): Observable<CNBConvert> {
        return Observable.of<CNBConvert>(this.doConvert(cnbData));
    }

    private doConvert(cnbData: string) {
        let res = {
          'statusCode': CNBStatusCode.OK,
          'message': '',
          'lpData': "\\score{ { c' d' e' f' } \\layout{} \\midi{} }",
          'log': 'Convertion OK'
        };
        return res;
    }

}
