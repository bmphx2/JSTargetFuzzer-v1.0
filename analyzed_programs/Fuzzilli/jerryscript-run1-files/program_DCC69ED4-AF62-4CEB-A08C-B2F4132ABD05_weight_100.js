function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 129;
    this.d = 129;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return F0;
}
function f7(a8, a9) {
    const o14 = {
        set f(a11) {
            this[v4];
            this.__proto__ = a9;
        },
        "h": v4,
        "g": F0,
        __proto__: a8,
        "c": f6,
        ...v5,
        [v4]: a9,
        "a": v3,
    };
    return o14;
}
f7(v4, v4);
f7(v5, v3);
const v17 = f7(v4, v3);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
}
new F21(v5, v4);
let v26 = new F21(v4, v5);
new F21(v3, v4);
v26 <<= v17;
let v28;
try { v28 = ("Tbmhf").trim(); } catch (e) {}
f6 -= v28;
v3 || F0;
