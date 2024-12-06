function f0() {
    const o7 = {
        __proto__: "bigint",
        1000: f0,
        227: 2.0,
        "d": "bigint",
        "b": "bigint",
        [2.0](a5, a6) {
            let v4 = this;
            a5.c = a5;
            v4 = "f";
            return a5;
        },
        ..."f",
        "b": "f",
        "h": 2.0,
        "c": "f",
        "g": 2.0,
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
const v10 = f0();
function f11(a12) {
    const o20 = {
        [a12](a14, a15) {
            const v16 = new f0(a14, a15, a15, v8, v9, this);
            let v17;
            try { v17 = a12.log10(v16, a14, v16, this, v10); } catch (e) {}
            try {
                super.getFullYear();
            } catch(e19) {
            }
            return v17;
        },
        __proto__: v8,
        "g": a12,
        [-1]: a12,
        "d": v9,
        [a12]: a12,
        [f11]: f0,
    };
    return o20;
}
const v21 = f11(f0);
const v22 = f11(f11);
f11(v10);
new f0();
const v25 = v22[-2];
v21 | v25;
Math.atan2(v25, v21);
Math.asinh(v25);
-v21;
v25 && v25;
class C37 {
    constructor(a39, a40) {
    }
}
for (const v41 in C37) {
}
