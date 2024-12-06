function f0() {
    const o13 = {
        ["setTime"](a5, a6) {
            let {"h":v7,} = this;
            let v12;
            try { v12 = this["getFloat32"](0.6140516045549256, -2.2250738585072014e-308, a5, "getFloat32"); } catch (e) {}
            return v12;
        },
        [0.6140516045549256]: "setTime",
        ..."-2147483649",
        ["setTime"]: "-2147483649",
    };
    return o13;
}
const v14 = f0();
f0();
f0();
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a23;
}
const v24 = new F20(1073741824n, 1073741824n);
const v25 = new F20(268435440n, 1073741824n);
const v26 = new F20(3n, 268435440n);
function f27(a28, a29, a30) {
    const o33 = {
        "b": a29,
        __proto__: v14,
        "a": v25,
        235: a28,
        "c": a28,
        0: v26,
        get d() {
            this.b = this;
            function f32() {
                return F20;
            }
            return 3n;
        },
    };
    return o33;
}
const v34 = f27(v26, f0, v26);
f27(v26, v25, v25);
f27(v24, v34, v24);
let v37 = 1000;
const v39 = new Map();
v39.values();
v37 <<= v39;
