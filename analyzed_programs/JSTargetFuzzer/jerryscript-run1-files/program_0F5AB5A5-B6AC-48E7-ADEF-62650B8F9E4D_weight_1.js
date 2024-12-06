function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.b = f0;
    this.a = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v5;
    this.h = F1;
    this.g = F1;
}
const v10 = new F6(v5, f0);
new F6(v5, v10);
const v12 = new F6(v4, v3);
async function f19(a20, a21) {
    class C22 extends v4 {
    }
    return v12;
}
const v23 = f19();
function f24() {
    return f24;
}
v23["catch"](f24);
