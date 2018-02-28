interface PGInfo {
    apiName: string;
    version: string;
    description: string;
}

interface PGCnb2Lp {
    status: PGStatus;
    lpData: string;
    logs: PGLog[];
}

interface PGLilyPond {
    status: PGStatus;
    base64PdfData: string;
    base64MidiData: string;
    logs: PGLog[];
}

interface PGMidi2Mp3 {
    status: PGStatus;
    base64Mp3Data: string;
    logs: PGLog[];
}

interface PGStatus {
    code: string;
    message: string;
}

interface PGLog {
    title: string;
    content: string;
}