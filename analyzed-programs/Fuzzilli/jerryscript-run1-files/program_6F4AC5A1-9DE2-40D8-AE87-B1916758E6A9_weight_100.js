function f3(a4, a5) {
    const o7 = {
        __proto__: "b",
        "d": a4,
        get h() {
            a4[this] = this;
            super.c ||= this;
            return a5;
        },
        "a": a5,
        "f": a4,
        ...a5,
    };
    return o7;
}
const v8 = f3("isSealed", "isSealed");
const v9 = f3("b", "b");
const v10 = f3("4", "b");
function f11(a12, a13, a14, a15) {
    const o26 = {
        set a(a17) {
            const v18 = super.c;
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = v18;
            }
            new F19("b", "isSealed");
            new F19(a12, v18);
            new F19(f3, a17);
        },
        "h": a14,
    };
    return o26;
}
const v28 = f11("isSealed", "isSealed", f3, f11(v8, "b", v9, v8));
const v29 = f11(f11, "isSealed", v28, v9);
function f33(a34, a35, a36) {
    const o37 = {
        "c": a35,
        "f": a35,
        "g": a36,
        [v9]: "b",
    };
    return o37;
}
f33(f33(v28, v8, v8), v28, v10);
f33(v29, v8, v9);
