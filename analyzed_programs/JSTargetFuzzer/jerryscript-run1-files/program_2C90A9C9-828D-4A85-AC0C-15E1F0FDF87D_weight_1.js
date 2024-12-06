let v0 = Array;
const v2 = new v0(446);
function f3(a4) {
    const o9 = {
        __proto__: a4,
        [a4]: v0,
        set g(a6) {
            v0[459] = v2;
            new WeakSet();
            v0 = this;
        },
        2147483649: v0,
        "g": 446,
        "c": a4,
        "f": 446,
        "b": v2,
    };
    return a4;
}
const v10 = f3(v0);
const v11 = v10(v2);
const v12 = f3(446);
function f13(a14, a15) {
    const o26 = {
        "d": f13,
        "f": v10,
        "e": a14,
        __proto__: v10,
        valueOf(a17, a18) {
            const v19 = super.e;
            const v20 = v2 >> a14;
            a17.c = v20;
            const v22 = new Date();
            const v23 = f3(v19, v10, a17, ...v2);
            try {
                super.o(v20, a14, v23, a15);
            } catch(e25) {
            }
            return v22;
        },
    };
    return o26;
}
f13(v10, v12);
f13(v12, v11);
f13(v11, v11);
function f30() {
    return f3;
}
new BigUint64Array(3);
v11.sort();
