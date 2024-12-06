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
let v11 = 0;
while (v11 < 5) {
    v5[6];
    v11++;
}
[[v5,4.0],1.2057068733773982e+308,Date,F0];
[v7];
new Uint32Array(257);
new Int8Array(2730);
new Int16Array(16);
function F28() {
    if (!new.target) { throw 'must be called with new'; }
}
class C30 extends F28 {
    constructor(a32, a33, a34) {
        super();
        this.__proto__ = F28;
    }
}
const v36 = new ArrayBuffer();
new DataView(v36);
new C30(F28, F28, C30);
