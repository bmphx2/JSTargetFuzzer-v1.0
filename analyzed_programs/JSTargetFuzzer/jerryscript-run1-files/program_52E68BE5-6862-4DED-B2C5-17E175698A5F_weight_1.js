function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
const v6 = new F3(65535);
const v7 = new F3(-45646);
const v8 = new F3(v7);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a12;
    this.g = 65535;
}
const v13 = new F9(-45646, v6);
v6.h = F3;
try { v6.isArray(F3, v13, v13, v6); } catch (e) {}
let v16 = -9007199254740991;
Math.min(F9);
const v18 = ++v16;
v18 ** v18;
Math.log10(v18);
new F9(-45646, v7);
new F9(-45646, v8);
gc();
