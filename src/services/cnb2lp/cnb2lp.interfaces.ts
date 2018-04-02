export interface CNBConvert {
    statusCode: CNBStatusCode;
    message: string;
    scoreName: string;
    lpData: string;
    multiple: boolean;
    log: string;
}

export enum CNBStatusCode {
    OK = 'OK',
    ERROR = 'ERROR'
}
