export interface CNBConvert {
    statusCode: CNBStatusCode;
    message: string;
    lpData: string;
    log: string;
}

export enum CNBStatusCode {
    OK = 'OK',
    ERROR = 'ERROR'
}
