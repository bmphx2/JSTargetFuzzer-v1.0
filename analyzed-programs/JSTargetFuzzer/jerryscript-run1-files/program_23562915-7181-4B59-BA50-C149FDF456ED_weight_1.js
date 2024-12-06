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
const v10 = new F5("n");
const o12 = {
};
let v13 = Proxy;
new v13(v10, o12);
++v13;
-38776 + 536870887;
