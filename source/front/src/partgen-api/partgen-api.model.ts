export class PGInfo {
    public apiName: string;
    public version: string;
    public description: string;
}

export class PGConvert {
    public status: string;
    public message: string;
    public output: PGOutut[];
    public logs: PGLog[];
}

export class PGOutut {
    public format: string;
    public base64Content: string;
}

export class PGLog {
    public section: string;
    public content: string;
}