function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1073741823;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,v3,F0];
[v5];
[F0,v4];
v6[-1] *= F0;
const v9 = new F0();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v5;
    this.a = v4;
    this.e = a13;
}
const v14 = v9 > v5;
new F10(v9, v14 ? v9 : v5);
typeof (v14 && v6) === "boolean";
const v21 = new F10(F0, v4);
const v22 = new F10(v21, F0);
new F10(v22, v21);
new Map();
for (const v28 of [-9.978835596066949,0.8505756132149569,684.253217079754,-Infinity,2.2250738585072014e-308]) {
    -0.355714392071409 % v28;
}
