function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967296;
    this.g = -4294967296;
}
new F0(F0, F0);
new F0();
new F0();
const v18 = [-1747250301,-9223372036854775808,-2147483647,9223372036854775807,1788226427,-1148315932,-1971667712];
for (let i21 = 0, i22 = 10; i21 < i22; i21++) {
    continue;
}
const v29 = RegExp.bind("2147483647", v18);
try { v29("f"); } catch (e) {}
