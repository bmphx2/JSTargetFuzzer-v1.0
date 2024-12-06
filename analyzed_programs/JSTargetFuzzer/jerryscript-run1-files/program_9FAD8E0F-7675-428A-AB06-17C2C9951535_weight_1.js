function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    F1.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f12() {
    return f0;
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -37149;
    this.h = v3;
}
new F13(v4, 47419, 34675, v5, f12);
new F13(v3, v3, 47419, v3);
new F13(v4, v3, 34675, v4, -1969179898, v5);
-9223372036854775807 >= 78;
