function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4096;
    this.h = 4096;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a8;
    this.f = a8;
}
new F6(v5);
new F6(v3);
new F6(v4);
new BigInt64Array(1);
new BigUint64Array(16);
new Uint16Array(84);
new Float32Array(4096);
new Uint16Array(4096);
const v35 = new Uint16Array(10);
v35[30];
