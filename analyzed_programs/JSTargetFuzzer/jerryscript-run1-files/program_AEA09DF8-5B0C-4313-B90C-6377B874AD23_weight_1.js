function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a7;
    this.a = a7;
    this.g = 16;
}
new F5(9007199254740990, F5);
const v10 = new F5(257, F5);
new F5(16, v10);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -1469630170;
    this.h = 536870887;
    const v22 = this.__proto__;
    try { this.n(-1469630170, v22, -1469630170); } catch (e) {}
    this.b = 257;
}
new F16(-2147483649, -2145693706, 9007199254740990, -12);
new F16(721406122, -2147483649, 721406122, 536870887);
new F16(9007199254740990, -2147483649, -2145693706, 16);
const v30 = [65537,15,257,2147483649,9007199254740991,-10,1073741823,-1,1073741825];
function f31(a32, a33, a34, a35) {
    return v30;
}
v30.flatMap(f31);
