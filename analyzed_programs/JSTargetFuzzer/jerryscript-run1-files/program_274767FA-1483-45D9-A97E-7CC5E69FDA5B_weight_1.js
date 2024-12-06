function f0() {
}
const v2 = [f0,[f0]];
const v3 = [v2];
function f4(a5, a6) {
    let v7 = 409683548n;
    let v8 = 41365n;
    v7 *= -(v8--);
    const o18 = {
        p(a12, a13) {
            class C14 extends f0 {
                f;
                static [v2] = a13;
                c;
            }
            new C14();
            new C14();
            new C14();
            return f0;
        },
    };
    return o18;
}
f4(v3, v2);
f4(v2, v2);
f4(v2, v3);
[385.3858289058196,-748.114828235576,-2.4936346289303186e+307,-1.183680233641547e+308,-1000000000.0];
[4.071396736730875,6.222460568010199,-2.0,4.0,-8.664761481767858,8.818330223528601,-1000.0,-2.220446049250313e-16,-4.0];
[-76517.04199707357,-2.220446049250313e-16,-305.197963491967];
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v28 = new F25();
const v29 = new F25();
function f30(a31, a32) {
    const o38 = {
        ...v29,
        __proto__: v28,
        m(a34, a35, a36, a37) {
            return this;
        },
    };
    return o38;
}
for (const v40 in f30()) {
    f30().d;
    v29[Symbol.unscopables] = v29;
}
