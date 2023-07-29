class VaidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'VaidationError';
    }
}

module.exports = { VaidationError };
  