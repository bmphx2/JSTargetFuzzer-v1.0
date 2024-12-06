function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.d = f0;
}
new F1();
new F1();
new F1();
const v17 = [[964329252n]];
try { v17.toLocaleString(v17); } catch (e) {}
