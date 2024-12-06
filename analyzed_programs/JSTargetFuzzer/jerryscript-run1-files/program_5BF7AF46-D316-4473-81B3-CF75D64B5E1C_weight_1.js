function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -2147483647;
    this.g = -2147483647;
}
const v3 = new F0();
new F0();
new F0(v3);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
    this.g = a15;
    this.multiline = 4096;
}
new F12(65535, 65535, 129);
new F12(65535, 129, 129);
new F12(F12, -58002, 4096);
function f20() {
    return F12;
}
Array.from(0.07272025241028923, f20, [1073741824,-9223372036854775808,-10]);
