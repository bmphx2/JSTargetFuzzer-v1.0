function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -12857;
    this.a = -12857;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o14 = {
        ...a7,
        "g": a8,
        ...v4,
        12: a7,
        get e() {
            try { this.setMinutes(a8); } catch (e) {}
            [NaN,-1000000.0];
            [-577499.9439726438,4.0,8.813009425387726,-1000.0,-1.7976931348623157e+308];
            return [9.608622755321348e+307];
        },
        ...v3,
        __proto__: a8,
        [a8]: v3,
        "a": a7,
    };
    return o14;
}
const v15 = f6(v3, v5);
const v16 = f6(v4, v5);
const v17 = f6(v4, v4);
const v19 = new Date();
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a23;
}
new F20(v4, v3);
const v25 = new F20(v5, v19);
new F20(v3, v5);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a30;
    this.e = v4;
    this.f = v15;
}
new F27(v3, v16);
new F27(v4, v17);
new F27(v4, v16);
const v34 = v5.constructor;
class C35 extends v34 {
    c;
    static [v25] = F20;
}
new C35();
v16[10] = v34;
function f37() {
    return v34;
}
