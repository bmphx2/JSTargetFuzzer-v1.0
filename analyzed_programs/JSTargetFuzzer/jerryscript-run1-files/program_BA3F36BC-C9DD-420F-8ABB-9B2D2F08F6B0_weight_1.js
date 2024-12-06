function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.g = a6;
    this.b = a6;
}
const v7 = new F3("59911", "59911");
const v8 = new F3(v7, "string");
new F3(v8, "string");
new BigUint64Array(7);
new Uint32Array(10);
new Int8Array(255);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
}
class C21 extends F19 {
    constructor(a23, a24, a25) {
        super();
        this.__proto__ = F19;
    }
}
new C21(F19, "string", C21);
