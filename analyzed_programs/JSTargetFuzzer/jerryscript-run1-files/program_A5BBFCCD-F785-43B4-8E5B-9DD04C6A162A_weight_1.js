function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -30532;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v4;
    this.f = a11;
    this.d = a11;
}
new F9(v5, 4);
new F9(v3, 810);
new F9(v3, 400084635);
const v21 = new Float64Array(128);
v21[2].__proto__;
