export enum logLevel {
    success = 1,
    info = 2,
    detail = 3,
    warning = 4,
    error = 5
}

export interface LogEntry {
    title: string;
    content: string;
    level: logLevel;
}