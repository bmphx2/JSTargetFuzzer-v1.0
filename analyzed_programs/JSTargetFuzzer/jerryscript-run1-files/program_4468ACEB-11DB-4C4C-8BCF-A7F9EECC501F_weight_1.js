function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870889;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,F0];
const v7 = [v3,v6,F0,v4];
const v8 = [v7];
const v9 = [v7,v8,v8,v5];
const v10 = [v6];
const v11 = [v5];
function f12(a13, a14, a15, a16) {
    const o21 = {
        m(a18, a19, a20) {
            v5.d = a19;
            a20[-2] /= a13;
            a16.__proto__ = a16;
            return a18;
        },
        "h": a16,
        "d": v8,
        "e": v7,
        ...a15,
        1119203754: v8,
        "b": a15,
    };
    return o21;
}
for (const v22 of v9) {
    f12(v22, v4, F0, v11);
}
f12(v10, v6, v4, v10);
const v28 = f12(v8, v8, v4, v10);
f12(v28, v6, v28, v8);
for (let [v31,v32] of "resizable") {
}
