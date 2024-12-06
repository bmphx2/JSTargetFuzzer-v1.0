function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 59707;
    this.g = 59707;
    this.h = 59707;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1024n;
    this.a = a13;
}
new F9(-1024n, -1024n, v3);
new F9(v3, 2147483648n, v4);
new F9(v5, 2147483648n, v4);
try {
    new F9();
} catch(e19) {
} finally {
}
