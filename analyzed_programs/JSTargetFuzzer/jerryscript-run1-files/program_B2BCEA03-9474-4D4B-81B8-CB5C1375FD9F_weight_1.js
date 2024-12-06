const v1 = new Date();
function f2(a3, a4) {
    const o5 = {
        [a4]: f2,
        "g": a3,
        "c": a4,
        "b": Date,
        1620: v1,
        "e": a3,
        [a3]: a4,
        ...Date,
        "d": v1,
        "a": a3,
    };
    return o5;
}
const v6 = f2(Date, v1);
const v7 = f2(v6, f2);
const v8 = f2(f2, v1);
const v11 = new WeakSet();
v11.add(v11);
const v15 = -1 < -4294967297n;
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a21;
    this.b = v15;
    this.h = a18;
}
new F16(v1, v8, v8, v6);
new F16(v7, v7, v1, v6);
new F16(v8, f2, v11, v8);
const v25 = /a|bc+/y;
class C27 extends v25.exec(v25) {
}
