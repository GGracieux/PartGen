export enum logLevel {
    success = 'success',
    info = 'info',
    detail = 'detail',
    warning = 'warning',
    error = 'error'
}

export interface LogEntry {
    title: string;
    content: string;
    level: logLevel;
}