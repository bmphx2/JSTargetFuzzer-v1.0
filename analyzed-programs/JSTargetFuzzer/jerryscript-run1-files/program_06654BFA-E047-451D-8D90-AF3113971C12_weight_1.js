function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1;
    this.d = 1;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.d = F0;
    RegExp.prototype ^= 0.9875862750480174;
    this.f = F0;
}
const v11 = new F6(v3);
const v12 = new F6(F6);
const v13 = new F6(F6);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v12;
    this.d = a17;
    a18.e = F0;
}
new F14(v5, v12, v12, v13);
const v21 = new F14(v5, v12, v11, v12);
new F14(v21, v12, v13, v12);
-128n + -128n;
