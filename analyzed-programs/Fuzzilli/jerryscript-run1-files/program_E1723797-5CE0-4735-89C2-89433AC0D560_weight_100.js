function f0() {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.f = f0;
}
const v6 = new F2(F2, F2);
const v7 = new F2(v6, F2);
new F2(undefined, v7);
function f15() {
    return v6;
}
for (let i20 = 0; i20 < 2; i20++) {
}
