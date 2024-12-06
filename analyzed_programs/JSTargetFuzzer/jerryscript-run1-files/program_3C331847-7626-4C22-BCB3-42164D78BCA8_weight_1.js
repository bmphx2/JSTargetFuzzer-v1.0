function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 64888;
    this.f = 64888;
    this.h = 64888;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.g = v4;
}
new F6(v5, v3);
new F6(v4, v4);
new F6(v5, v4);
String.prototype >>>= -61108;
