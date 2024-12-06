function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.f = a6;
    this.a = a6;
    a5.g = -3;
}
new F3(-952154987, -3);
new F3(F3, 3);
new F3(-3, -3);
new Uint32Array(Uint32Array);
new BigInt64Array(255);
new Float32Array(2147);
const v21 = new Int32Array(585);
try { v21.some(WeakMap); } catch (e) {}
