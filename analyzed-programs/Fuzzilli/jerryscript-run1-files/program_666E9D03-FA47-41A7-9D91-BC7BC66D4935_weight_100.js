function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 511720958;
    this.c = 511720958;
    this.b = 511720958;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
    this.b = v4;
    this.c = a8;
}
const v9 = new F6(v3);
new F6(v4);
new F6(v5);
const v14 = new BigUint64Array(1024);
const v17 = new Uint32Array(0);
let v18 = 127;
const v20 = new BigUint64Array(v18);
v9[268435440] = F0;
BigUint64Array <= v18;
v5.c += 1024;
++v18;
v3[0] = v20;
try { v17.indexOf(v14); } catch (e) {}
const o29 = {
    "maxByteLength": 6,
};
const v31 = new ArrayBuffer(6, o29);
new Uint8Array(v31);
