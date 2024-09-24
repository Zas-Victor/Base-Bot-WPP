class WaningError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WaningError';
    }
}
module.exports = {
    WaningError,
}