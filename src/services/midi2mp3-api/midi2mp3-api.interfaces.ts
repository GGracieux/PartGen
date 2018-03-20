export interface MMInfo {
    apiName: string;
    version: string;
    description: string;
}

export interface MMConvert {
    statusCode: MMStatusCode;
    message: string;
    base64Mp3Data: string;
    logs: MMLog[];
}

export interface MMLog {
    title: string;
    content: string;
}

export enum MMStatusCode {
    OK = 'OK',
    ERROR = 'ERROR'
}
