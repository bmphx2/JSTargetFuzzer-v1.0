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
    const v10 = (a11, a12, a13, a14) => {
        function F15(a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a13;
        }
        return v10;
    };
    this.g = v3;
    this.f = v4;
}
const v20 = new F6(v4, v5);
const v21 = new F6(v3, v4);
new F6(v5, v5);
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v3;
    this.c = v21;
}
new F23(v5, v4, v21);
new F23(v4, v4, v20);
new F23(v3, v5, v20);
function f34() {
    return 10000;
}
const v41 = 2147483648n >= -5534n;
const t34 = 10000;
t34[16] = 10000;
12n && v41;
new Uint8Array(127);
([]).reduceRight(Date, "number");
try { (12n).n(); } catch (e) {}
const v54 = -4294967295;
f34();
-4294967295 == 1 ? 1 : 1;
