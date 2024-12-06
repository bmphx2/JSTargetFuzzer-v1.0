function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9604;
    this.e = 9604;
    this.d = 9604;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
    this.g = v5;
    this.h = a8;
}
new F6(v4);
new F6(v4);
new F6(v3);
new Int16Array(5);
new Uint32Array(0);
let v21 = 9;
new Uint32Array(v21);
try { v5.p(v4); } catch (e) {}
v4[-1] = v3;
v21 = 125991666;
