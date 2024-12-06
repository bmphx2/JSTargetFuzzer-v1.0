new Array(833);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.h = 833;
    this.d = a6;
}
const v7 = new F3(833, F3);
const v8 = new F3(F3, 833);
const v9 = new F3(v8, F3, v8, Array);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
    this.h = F3;
}
new F10(v7, F3);
new F10(v7, v8);
new F10(v7, v9);
const v22 = new Uint32Array(181);
let v24 = BigUint64Array;
let v25 = new v24(1);
let v26 = 253;
[v26,,v24,v25] = v22;
try { v24["abs"](181, v26, v24); } catch (e) {}
new Uint16Array(v26);
for (let i39 = 0; i39 < 2; i39++) {
    const v45 = new Function("x");
    v45.name;
}
Function();
