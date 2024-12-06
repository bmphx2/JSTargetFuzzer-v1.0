function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = F0;
    this.c = 1024;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function f6() {
    return v4;
}
new Int32Array(v3);
new Float32Array(16);
new BigUint64Array(BigUint64Array);
("valueOf").split(BigUint64Array);
