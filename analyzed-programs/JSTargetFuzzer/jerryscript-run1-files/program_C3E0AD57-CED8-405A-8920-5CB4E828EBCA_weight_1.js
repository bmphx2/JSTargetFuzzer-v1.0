function f0() {
    const o11 = {
        n(a5) {
            const v6 = +this;
            class C7 {
                h;
                [v6] = a5;
            }
            new C7();
            new C7();
            new C7();
            return "f";
        },
        "h": "f",
        "d": f0,
        "c": f0,
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
function f15(a16, a17) {
    const o19 = {
        [v14]: a16,
        "d": v13,
        "h": a16,
        "e": v14,
        [a17]: v13,
        "a": a17,
        __proto__: a16,
        get g() {
            let v18 = this;
            v18 **= v18;
            return v18;
        },
        0: a16,
        3: a16,
        "c": v14,
    };
    return o19;
}
const v20 = f15(v12, v13);
const v21 = f15(v13, v14);
const v22 = f15(v13, v13);
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a27;
    this.f = v20;
}
new F23(v21, v12, v22, v12);
new F23(v12, v12, v13, v20);
new F23(v22, v12, v21, v13);
Float64Array.from(Uint8ClampedArray, RegExp);
