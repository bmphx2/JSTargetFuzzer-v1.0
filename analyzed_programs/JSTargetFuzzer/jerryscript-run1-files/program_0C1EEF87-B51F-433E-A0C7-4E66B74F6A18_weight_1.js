function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 7339;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a9;
    this.f = a8;
}
const v10 = new F6(v4, v3);
new F6(F0, v10, F0);
new F6(F6, v4);
class C16 {
    constructor(a18, a19) {
    }
}
C16.length = 2147483647;
