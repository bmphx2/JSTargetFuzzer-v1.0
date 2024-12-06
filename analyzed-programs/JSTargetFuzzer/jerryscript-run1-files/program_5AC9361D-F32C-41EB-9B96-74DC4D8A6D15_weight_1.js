function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -4096;
    this.e = -4096;
    this.h = -4096;
}
new F0();
const v4 = new F0();
new F0();
const v8 = new BigUint64Array(2);
new Uint8Array(3);
new Uint16Array(4021);
const v17 = new Uint32Array(181);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a21;
}
const v22 = new F18(v4, 2);
const v23 = new F18(v4, v22);
new F18(v4, v23);
let v26 = BigUint64Array;
let v27 = new v26(1);
let v28 = 253;
var c = 257;
v27 = v8;
[v28,,v26,v27] = v17;
try { v26["abs"](181, v28, v26); } catch (e) {}
new Uint16Array(v28);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("x");
    v50.name;
}
Function();
