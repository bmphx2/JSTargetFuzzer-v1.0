function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a6;
    this.h = 1.0;
    this.a = a5;
}
const v7 = new F3(0.616353762402524, 1.0);
const v8 = new F3(v7, 0.616353762402524);
const v9 = new F3(F3, 0.616353762402524);
function f10() {
    return v9;
}
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
}
const v16 = new F11(v8, v8, F3);
new F11(v7, v7, f10);
new F11(1.0, v9, v16);
const v19 = v16[v16];
const v21 = v19 ** -1.7976931348623157e+308;
for (const v22 of v19) {
    new F3(v22, -1.7976931348623157e+308);
}
delete v16[F11];
