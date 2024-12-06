function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -848857627;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4.0;
    this.c = a12;
}
new F9(v4, v3);
new F9(v3, v4);
new F9(v4, v3);
const v21 = new Uint32Array(181);
let v23 = BigUint64Array;
let v24 = new v23(1);
let v25 = 253;
[v25,,v23,v24] = v21;
try { v23["abs"](181, v25, v23); } catch (e) {}
new Uint16Array(v25);
for (let i38 = 0; i38 < 2; i38++) {
    const v44 = new Function("x");
    v44.name;
}
Function();
