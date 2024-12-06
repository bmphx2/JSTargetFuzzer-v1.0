function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1073741824n;
    this.c = this;
    this.b = a6;
}
new F3(9007199254740991n, 1073741824n);
const v8 = new F3(1073741824n, 9007199254740991n);
new F3(1073741824n, F3);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F3;
    this.b = 9007199254740991n;
}
new F10(9n, 9n);
new F10(v8, 9007199254740991n);
new F10(9007199254740991n, 1073741824n);
-34557n == -9223372036854775808;
