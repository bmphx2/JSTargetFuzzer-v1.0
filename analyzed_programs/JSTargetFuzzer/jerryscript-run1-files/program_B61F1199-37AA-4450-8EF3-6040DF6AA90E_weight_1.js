function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
    this.b = 9;
    this.g = 9;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v7 = [[v3,v3,F0]];
[v7,v5,v7];
const v10 = new Map();
function f11() {
    return v10;
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
    Symbol();
}
new F12(F12);
