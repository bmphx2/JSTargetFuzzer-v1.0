function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.message = a13;
    this.description = a13;
}
const v14 = new F9(536870889, v5, v3);
new F9(v14, v4, v4);
new F9(v5, v5, v4);
new Float32Array(44536);
new Array(6);
new Float32Array(1000);
try { Set(Set); } catch (e) {}
