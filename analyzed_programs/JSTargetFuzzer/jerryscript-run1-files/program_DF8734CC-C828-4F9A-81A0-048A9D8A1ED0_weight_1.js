function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 65536;
    this.f = 65536;
    this.c = 65536;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = RegExp(RegExp);
v8.test(RegExp);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a19;
    this.f = a17;
}
const v21 = new F15(v5, 35906, 1259377308n, v5);
const v22 = new F15(v5, 35906, 35906, v4);
const v23 = new F15(v5, -924662027, -1073741824n, v5, v8, v22);
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F24(F24, F24);
class C29 {
}
const v30 = new C29();
const v31 = v28 ^ v30;
let {"c":v32,"f":v33,} = v23;
({"e":v33,} = v28);
function F34(a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a36;
    this.growable = -1073741824n;
}
const v38 = new F34(v31, v21);
new F34(35906, v32, v38, 65537);
new F34(35906, v22);
v31 <= v31;
