function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 127;
    this.d = 127;
}
const v3 = new F0();
new F0();
new F0();
new Array(16);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a14;
    this.f = v3;
    this.h = -5;
}
const o17 = {
    ...this,
};
const v18 = new F12(-26678, 16);
new F12(F12, 16);
new F12(v18, -26678);
if (0n) {
}
