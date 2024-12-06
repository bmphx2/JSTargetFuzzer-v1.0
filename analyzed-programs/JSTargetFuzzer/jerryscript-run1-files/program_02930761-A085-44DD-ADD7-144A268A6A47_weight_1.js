function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 15;
    this.a = 15;
}
const v3 = new F0();
const v4 = new F0();
new F0();
new Uint8Array(0);
new BigUint64Array(1);
const v17 = new Float64Array(0);
const v20 = new Uint32Array(181);
let v22 = BigUint64Array;
let v23 = new v22(1);
let v24 = 253;
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a27;
}
const v29 = new F25(v4, v17);
new F25(v4, -35019);
new F25(v3, v29);
[v24,,v22,v23] = v20;
try { v22["abs"](181, v24, v22); } catch (e) {}
new Uint16Array(v24);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("x");
    v50.name;
}
Function();
