function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4294967297;
    this.c = 4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 {
    128;
    [v4];
    static #n(a8) {
        return;
        return F0;
    }
    1;
    e = v5;
    static #b;
}
const v12 = new C6();
const v13 = new C6();
const v14 = new C6();
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v13;
}
const v21 = new F15(v12, F15, v12, v14);
const v22 = new F15(v21, F15, v12, v12);
new F15(v22, v3, v12, v13);
const o24 = {
    __proto__: v22,
    "c": v4,
    "f": v13,
    "e": v21,
};
C6.e = v4;
