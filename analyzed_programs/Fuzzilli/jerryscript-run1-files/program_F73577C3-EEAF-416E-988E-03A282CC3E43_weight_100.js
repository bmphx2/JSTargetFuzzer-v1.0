function f0() {
}
const v1 = [f0,f0,f0,f0,f0];
const v2 = [f0,v1,v1,v1];
[v2,f0,f0,f0,f0];
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a15;
    this.f = 15n;
}
new F10(-2147483649, -1235343999n, -2147483649, 2n);
new F10(268435440, -1235343999n, -561637959, 2n);
new F10(-2147483649, 2n, 268435440, -1235343999n);
const o19 = {
};
const v21 = new Proxy(v2, o19);
2n && v21;
const o25 = {
    "maxByteLength": 6,
};
const v27 = new ArrayBuffer(6, o25);
new BigUint64Array(v27);
