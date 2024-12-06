function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F0;
}
new F0(F0, F0, F0);
new F0();
new F0();
new Float32Array(129);
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
class C11 extends F9 {
    constructor(a13, a14, a15) {
        super();
        this.__proto__ = F9;
    }
}
new C11(F9, F9, C11);
new Float32Array(129);
new RangeError(47177);
/ab\b\d\bcd*/yisu;
