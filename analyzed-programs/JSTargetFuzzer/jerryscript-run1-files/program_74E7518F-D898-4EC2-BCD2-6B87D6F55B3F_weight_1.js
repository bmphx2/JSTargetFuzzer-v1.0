function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435456;
    this.g = 268435456;
    this.__proto__ = 268435456;
}
new F0();
new F0();
const v5 = new F0();
const v7 = new Date();
[[v5,4.0],1.2057068733773982e+308,Date,F0];
[v7];
new Uint32Array(257);
new Int8Array(2730);
new Int16Array(16);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
}
class C25 extends F23 {
    constructor(a27, a28, a29) {
        super();
        this.__proto__ = F23;
    }
}
const v31 = new ArrayBuffer();
new DataView(v31);
new C25(F23, F23, C25);
