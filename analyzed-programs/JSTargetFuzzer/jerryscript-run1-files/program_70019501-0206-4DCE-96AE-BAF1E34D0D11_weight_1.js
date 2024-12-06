const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
}
const v3 = new F1(F1, F1);
new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a8;
}
new F6(v5, v5, F6, v0, v5);
new F6(v3);
new F6(v3);
const v20 = new Int16Array(227);
async function f22(a23, a24, a25, a26) {
    v20[128] = -35178n;
    return f22;
}
f22(227, f22, Int16Array, f22);
