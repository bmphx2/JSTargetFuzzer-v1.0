function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 257;
    this.a = 257;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v10 = new WeakSet();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a14;
    this.d = a13;
    this.g = a14;
}
new F11(v4, v5);
new F11(v5, v10);
new F11(v3, v10);
1n == 886.0009926550579;
