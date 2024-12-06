function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740990;
    this.d = -9007199254740990;
    this.g = -9007199254740990;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
    this.g = a8;
}
const v9 = new F6(v3);
const v10 = new F6(v3);
const v11 = new F6(v3);
let v16 = 0.6214115313840339;
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a20;
    this.f = v5;
    this.b = v10;
}
let v22 = new F18(1.3715671906431484e+308, F0);
const v23 = new F18(1.3715671906431484e+308, -1024);
const v24 = new F18(-5.0, v11);
const o25 = {
    __proto__: v23,
    ...v5,
    ...v4,
    "h": -5.0,
};
v3 !== o25;
let v27 = v11[v3];
[v22,v16,,...v27] = v27;
v9[v24] <<= v16;
