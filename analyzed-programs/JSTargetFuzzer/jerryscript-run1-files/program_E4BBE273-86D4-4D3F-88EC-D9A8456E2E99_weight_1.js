function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 65536;
    this.f = 65536;
    this.d = 65536;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a16;
    this.f = a14;
}
const v18 = new F12(v5, 35906, 1259377308n, v5);
const v19 = new F12(v5, 35906, 35906, v4);
const v20 = new F12(v5, -924662027, -1073741824n, v5);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F21(F21, F21);
class C26 {
}
const v27 = new C26();
const v28 = v25 ^ v27;
let {"c":v29,"f":v30,} = v20;
({"e":v30,} = v25);
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a33;
    this.g = -1073741824n;
}
new F31(v28, v18);
new F31(35906, v29);
new F31(35906, v19);
v28 <= v28;
