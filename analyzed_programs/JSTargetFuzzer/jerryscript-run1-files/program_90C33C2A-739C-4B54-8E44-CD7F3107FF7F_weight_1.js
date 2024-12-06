function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.c = f0;
    this.b = f0;
}
const v3 = new F1();
let v4 = new F1();
try { f0(...f0, v3, f0, v4); } catch (e) {}
Math.atanh(-65537);
62007 % 62007;
Math.clz32(f0);
Math.tan(f0);
--v4;
new F1();
0.9637831412122093 > 4294967296n;
