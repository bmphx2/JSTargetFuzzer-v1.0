function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this.b = -65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a16.h = a15;
    this.b = a14;
}
new F12(v4, 4, v3);
new F12(v5, -128, v4);
new F12(v4, 4, v4);
const o24 = {
    m(a21, a22, a23) {
        return a22;
    },
};
const v25 = o24.m;
const o26 = {
    ...v25,
};
