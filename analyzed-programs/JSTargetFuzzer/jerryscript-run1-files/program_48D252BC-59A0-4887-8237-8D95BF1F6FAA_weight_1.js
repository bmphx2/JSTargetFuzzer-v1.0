function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -64014;
    this.b = -64014;
    this.c = -64014;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.a = a9;
}
new F6(v3, v5);
const v11 = new F6(v5, v4);
for (let v13 = 0; v13 < 32; v13++) {
    v5["p" + v13] = v13;
}
const v16 = new F6(v4, v3);
const v18 = new WeakSet();
try { v18.delete(v3); } catch (e) {}
v11.__proto__ = v16;
new Array(244);
(-1.0 ^ -4096) * -4.473924600681509;
