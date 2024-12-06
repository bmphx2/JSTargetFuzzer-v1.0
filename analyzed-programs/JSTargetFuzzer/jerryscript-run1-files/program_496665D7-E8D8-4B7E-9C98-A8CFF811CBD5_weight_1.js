function f6(a7, a8, a9) {
    const o14 = {
        "c": a9,
        __proto__: a9,
        "e": 2,
        [a9]: -13,
        m(a11, a12, a13) {
            super.c = a7;
            return a7;
        },
        ...a8,
        3: a8,
        10: a8,
        "a": -61570,
    };
    return o14;
}
const v15 = f6(-61570, f6, -61570);
const v16 = f6(v15, -13, -61570);
v15.e;
for (let v18 = 0; v18 < 32; v18++) {
    v16["p" + v18] = "p";
}
f6(v16, -13, -13);
const v24 = new Int32Array(348);
const v27 = new Float32Array(0);
try { v24.toString(); } catch (e) {}
const o31 = {
    "apply": f6,
    "c": -577059215,
    "setPrototypeOf": f6,
};
new Proxy(v27, o31);
new Float64Array(4);
const o39 = {
    m(a36, a37, a38) {
        return a37;
    },
};
const v40 = o39.m;
const o41 = {
    ...v40,
};
