function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 3;
    this.d = 3;
    this.e = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v8 = 1996055201;
class C9 {
    constructor(a11, a12, a13) {
        v5.d |= -2;
        a11 >> v3;
    }
    static set c(a16) {
        v8 ||= 2147483647;
        try {
            super.p();
        } catch(e18) {
        }
    }
}
const v19 = new C9(v3, 2147483647, v4);
const v20 = new C9(v4, v8, v5);
new C9(v19, -2, v3);
v19.__proto__ = v20;
new F0();
const o25 = {
    "maxByteLength": 1021,
};
const v27 = new SharedArrayBuffer(9, o25);
new BigUint64Array(v27);
