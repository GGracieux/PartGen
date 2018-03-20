export interface LPInfo {
    apiName: string;
    version: string;
    description: string;
}

export interface LPConvert {
    statusCode: LPStatusCode;
    message: string;
    base64PdfData: string;
    base64MidiData: string;
    logs: LPLog[];
}

export interface LPLog {
    title: string;
    content: string;
}

export enum LPStatusCode {
    OK = 'OK',
    ERROR = 'ERROR'
}
