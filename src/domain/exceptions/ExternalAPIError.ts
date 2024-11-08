export class ExternalAPIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ExternalAPIError';
    }
}