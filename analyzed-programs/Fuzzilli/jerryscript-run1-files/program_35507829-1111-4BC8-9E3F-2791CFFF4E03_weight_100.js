function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = F3;
    this.c = a5;
}
new F3(4942);
new F3(4942);
new F3(4942);
new Float64Array(6);
new Float32Array(16);
new Float32Array(0);
Object.defineProperty(Array, 14, { configurable: true, enumerable: true, get: Array, set: Array });
