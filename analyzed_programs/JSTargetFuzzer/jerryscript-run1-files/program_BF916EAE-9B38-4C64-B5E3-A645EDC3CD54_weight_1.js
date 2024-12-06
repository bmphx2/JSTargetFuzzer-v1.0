const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a4;
    this.b = v1;
}
const v6 = new F2(v1, Set);
const v7 = new F2(v1, F2);
const v8 = new F2(F2, v1);
function f9(a10, a11, a12) {
    const o22 = {
        "f": a10,
        ...v1,
        __proto__: a11,
        "c": v1,
        "a": a12,
        "e": v6,
        [v8]: v8,
        "d": F2,
        ...a12,
        "g": v6,
        valueOf(a14, a15, a16, a17) {
            a11.b;
            return this;
        },
    };
    return o22;
}
f9(v7, v8, f9(v1, v6, Set));
f9(f9, v7, f9);
function f29(a30, a31) {
    const o32 = {
    };
    return o32;
}
const v33 = f29(f29, f29);
const v34 = f29(v33, v33);
const o37 = {
    get f() {
        super.e = "v";
        return this;
    },
};
Object.defineProperty(v34, 6, { configurable: true, get: f29 });
for (let i = 0; i < 5; i++) {
    for (let v38 = 0; v38 < 32; v38++) {
        v33["p" + v38] = v38;
    }
}
