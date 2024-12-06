const v1 = new Date();
function f2(a3, a4) {
    const o5 = {
        [a4]: f2,
        "g": a3,
        "c": a4,
        "b": Date,
        1620: v1,
        "e": a3,
        [a3]: Date,
        ...Date,
        "d": v1,
        "a": a3,
    };
    return o5;
}
const v6 = f2(Date, v1);
const v7 = f2(v6, f2);
const v8 = f2(Date, v1);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a15;
    this.b = a14;
    this.h = a15;
}
new F10(v1, v8, v8, v6);
new F10(v7, v7, v1, v6);
new F10(v8, f2, v7, v8);
const v19 = /a|bc+/y;
class C21 extends v19.exec(v19) {
}
