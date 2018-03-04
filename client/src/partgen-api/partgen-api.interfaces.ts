export interface PGInfo {
    apiName: string;
    version: string;
    description: string;
}

export interface PGLilyPond {
    status: PGStatus;
    base64PdfData: string;
    base64MidiData: string;
    logs: PGLog[];
}

export interface PGMidi2Mp3 {
    status: PGStatus;
    base64Mp3Data: string;
    logs: PGLog[];
}

export interface PGStatus {
    code: statusCode;
    message: string;
}

export interface PGLog {
    title: string;
    content: string;
}

export enum statusCode {
    OK = 'OK',
    ERROR = 'ERROR'
}
