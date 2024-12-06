function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.e = f0;
}
new F1(F1, f0, F1);
new F1();
new F1();
const v20 = -14;
const v21 = ~-1423981769n;
try { Date.UTC(268435439, -14, 14, -14, v20, -14, v21); } catch (e) {}
