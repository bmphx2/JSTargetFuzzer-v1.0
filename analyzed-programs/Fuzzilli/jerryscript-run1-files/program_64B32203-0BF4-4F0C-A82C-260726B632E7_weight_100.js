function f3() {
    return 8;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
}
const v7 = new F4(8);
const v8 = new F4(-605);
const v9 = new F4(-10065);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a13;
    this.h = a12;
}
new F10(v8, v8, v9, v7);
new F10(v7, v8, v9, F4);
new F10(v7, v8, v7, 8);
const v19 = [268435439,57600,-25725,127,-5,-13,6820,127];
class C20 {
    n(a22) {
        for (let i24 = 0; i24 < 1, i24; i24++) {
            typeof v19;
        }
    }
}
const v31 = new C20();
v31.n();
