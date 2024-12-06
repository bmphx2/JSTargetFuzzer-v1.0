function f0() {
    const o11 = {
        "e": "bigint",
        __proto__: "bigint",
        set f(a5) {
            let v6 = 10;
            for (; v6--;) {
                const o8 = {
                };
                new Proxy("bigint", o8);
            }
        },
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
const v15 = [v14];
const v16 = [v13];
const v17 = [v12,v13,v15,v12,v14,v13];
function f18(a19, a20, a21, a22) {
    const o36 = {
        [a19](a24, a25, a26, a27) {
            Math.asin(12754, 1000.0, f18, v15);
            4096 / a19;
            ~4096;
            Math.atan(4096);
            return v16;
        },
        4: v17,
        "g": a19,
    };
    return o36;
}
const v37 = f18(v13, v16, f18, v14);
f18(v37, v15, v16, v13);
f18(v14, v16, v17, v13);
function F40(a42, a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a43;
    this.e = a44;
    this.h = f18;
}
new F40(v13, v15, v15, v16);
new F40(v37, v15, v16, v16, v12);
new F40(f0, v16, v15, v17);
Math.sign();
