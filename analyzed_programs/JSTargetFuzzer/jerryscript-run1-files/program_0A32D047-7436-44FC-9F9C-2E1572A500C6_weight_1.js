function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 10000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
    this.g = v3;
    this.f = v4;
}
const v10 = new F6(v4, v5);
const v11 = new F6(v3, v4);
new F6(v5, v5);
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v3;
    this.c = v11;
}
new F13(v5, v4, v11);
new F13(v4, v4, v10);
new F13(v3, v5, v10);
function f24() {
    return 10000;
}
const v31 = 2147483648n >= -5534n;
const t27 = 10000;
t27[16] = 10000;
12n && v31;
try { (12n).n(); } catch (e) {}
const v37 = -4294967295;
f24();
-4294967295 == 1 ? 1 : 1;
