function f0() {
}
function f1() {
    const o7 = {
        "h": f0,
        "b": f0,
        "f": f0,
        "d": f1,
        __proto__: f0,
        "c": f0,
        [f0]() {
            f0();
            return -16n;
        },
        "g": f0,
        "e": f0,
    };
    return o7;
}
const v8 = f1();
const v9 = f1();
const v10 = f1();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f1;
    this.f = f0;
    this.c = v8;
}
const v15 = new F11(v8, v9);
const v16 = new F11(v10, v15);
new F11(v16, v9);
new SyntaxError(SyntaxError);
