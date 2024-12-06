function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 16;
    this.c = 16;
    this.d = 16;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870887;
    this.f = v4;
}
new F9(v4, 1073741823);
const v14 = new F9(v3, 1073741823);
new F9(v4, 1073741823);
class C18 extends v14.constructor {
    c;
    f = v4;
    e = 536870887;
}
new C18();
const v21 = new Int16Array(512);
v21[8] >>>= 6;
