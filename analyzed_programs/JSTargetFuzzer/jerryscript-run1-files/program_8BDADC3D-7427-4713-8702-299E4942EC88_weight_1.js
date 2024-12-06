function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
    this.e = -1000000000000.0;
    this.f = -1000000000000.0;
}
new F3(204.60552258827875, 204.60552258827875);
const v8 = new F3(-1000000000000.0, 204.60552258827875);
new F3(204.60552258827875, v8);
new Float32Array(8);
new Float64Array(1667);
new Uint32Array(Float64Array);
try {
    new Uint32Array(-49924);
} catch(e22) {
}
