function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    const t3 = [this,-1000000000000.0];
    t3.__proto__ = a6;
    this.e = -1000000000000.0;
    this.f = -1000000000000.0;
}
const v11 = new F3(204.60552258827875, -1000000000000.0);
const v12 = new F3(-1000000000000.0, 204.60552258827875);
new F3(v11, v12);
new Float32Array(Float32Array);
new Float64Array(1667);
new Uint32Array(Uint32Array);
try {
    new Uint32Array(-49924);
} catch(e26) {
}
