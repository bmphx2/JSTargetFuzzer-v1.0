function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4294967296;
    this.g = -4294967296;
}
new F0();
new F0();
new F0();
function f9() {
    return -2;
}
const v18 = new Uint32Array(181);
let v20 = BigUint64Array;
let v21 = new v20(1);
let v22 = 253;
[v22,,v20,v21] = v18;
try { v20["abs"](181, v22, v20); } catch (e) {}
class C28 {
    constructor(a30, a31) {
        ("4294967297").replaceAll(a31, a30);
    }
}
new C28(C28);
new Uint16Array(v22);
for (let i42 = 0; i42 < 2; i42++) {
    const v48 = new Function("x");
    v48.name;
}
Function();
