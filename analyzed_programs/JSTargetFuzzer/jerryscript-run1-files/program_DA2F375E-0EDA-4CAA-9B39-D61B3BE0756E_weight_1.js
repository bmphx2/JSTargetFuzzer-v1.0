function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = false;
}
new F1();
const v4 = new F1();
const v5 = new F1();
class C6 {
    constructor(a8) {
        [F1,v4,a8,this,false];
        typeof v5 === "boolean";
    }
    o(a14) {
        this.__proto__ = this;
        v5[a14] = this;
        g = this.__proto__;
        return this;
    }
}
const v16 = new C6(v4);
new C6(v4, v4, v16);
new C6(v5);
const v24 = new Uint32Array(181);
let v26 = BigUint64Array;
let v27 = new v26(1, false, Uint32Array, v26);
let v28 = 253;
[v28,,v26,v27] = v24;
try { v26["abs"](181, v28, v26); } catch (e) {}
new Uint16Array(v28);
for (let i41 = 0; i41 != 2; i41++) {
    const v47 = new Function("x");
    v47.byteOffset;
}
Function();
