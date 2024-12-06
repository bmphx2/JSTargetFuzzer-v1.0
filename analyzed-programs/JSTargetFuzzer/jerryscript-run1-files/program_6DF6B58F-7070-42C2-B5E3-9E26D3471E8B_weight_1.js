function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    F1.f = f0;
    this.b = f0;
    this.a = f0;
}
new F1();
new F1();
new F1();
new Set();
function f11() {
    return 29552;
}
const v17 = new Float32Array(1000);
v17.reverse();
