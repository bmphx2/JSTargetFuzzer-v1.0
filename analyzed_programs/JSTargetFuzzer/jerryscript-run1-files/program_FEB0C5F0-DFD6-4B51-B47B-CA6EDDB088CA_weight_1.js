function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
class C6 {
    constructor(a8, a9) {
        function* f10(a11, a12, a13, a14) {
            const v17 = Math.acos(16);
            Math.asin(!16);
            new Uint32Array();
            Math.trunc(0.0);
            yield 16;
            return v17;
        }
        f10(this, v4, a9, f0);
    }
    [f0];
    e;
    c = v3;
}
new C6(v5, v5);
new C6(v4, C6);
new C6(C6, v5);
const v41 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
try { v41(RegExp, 128, 0); } catch (e) {}
