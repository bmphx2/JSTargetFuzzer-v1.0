function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 8;
    this.b = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a8;
    this.h = a8;
    this.b = a8;
}
const v9 = new F6(v5);
const v10 = new F6(v9);
const v11 = new F6(v10);
class C12 extends F6 {
    static [F0];
    static n(a14, a15, a16, a17) {
        let v21 = !129;
        const v22 = ++v21;
        +v21;
        Math.log10(v21);
        129 & v22;
        return v22;
    }
}
let v26 = new C12();
v4.valueOf = v3;
v26 = v11;
v4[65537];
const v30 = Symbol.toStringTag;
v26[v30] = v30;
new C12();
new C12();
Promise.resolve(BigInt64Array);
