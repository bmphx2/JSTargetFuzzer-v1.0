function f0() {
}
function f1() {
    return f0;
}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f1;
    a7.g = a7;
    this.e = f1;
}
new F5("n");
new F5("e");
new F5("n");
-38776 + 536870887;
