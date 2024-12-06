function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.h = a5;
}
const v7 = new F3("function", "sticky");
new F3("sticky", "sticky");
const v9 = new F3("o", "function");
new Array(4);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a18;
    this.c = a19;
}
new F16("function", v9, "sticky", 925548.1557666245, Array, F3);
new F16("o", v7, "function");
new F16("o", v7, "function");
const v26 = [String];
Reflect.apply(String.raw, String, v26);
