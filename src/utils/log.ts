import { type ErrorWithMessage } from './errors';

export function log(obj: string | { message: string, stack: string | undefined }, level: string = 'info'): void {
  let message = typeof obj === 'string' ? obj : obj.message;
  const logObject: any = {
    level: level.toUpperCase(),
    message,
    timestamp: new Date().toISOString(),
  };
  if (typeof obj == 'object' && obj.stack) {
    logObject.stack = obj.stack;
  }

  switch (level) {
    case 'info':
      console.log(toJson(logObject));
      break;
    case 'warn':
      console.warn(toJson(logObject));
      break;
    case 'error':
      console.error(toJson(logObject));
      break;
    default:
      console.log(JSON.stringify(logObject));
      break;
  }
}

function toJson(body: any): string {
  return JSON.stringify(body);
}

export function logError(error: ErrorWithMessage): void {
  log({ message: error.message, stack: error.stack }, 'error');
}