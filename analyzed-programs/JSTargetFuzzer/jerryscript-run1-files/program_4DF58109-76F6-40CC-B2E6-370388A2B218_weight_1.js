class C3 {
    o(a5, a6) {
        a5[-9223372036854775807] = 1e-15;
        Math.exp(a5);
        Math.cosh(16);
        return Math.log2(a5 & 2147483648);
    }
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function f17(a18, a19, a20, a21) {
    const o22 = {
        "e": a21,
        "b": v15,
        "d": -2147483647,
        __proto__: C3,
        "h": v16,
        "f": a20,
        ...v14,
        "g": a19,
        "a": a21,
        "c": v16,
        0: -2147483647,
    };
    return o22;
}
f17(f17(v15, v16, v14, v16), v16, v14, v14);
f17(v14, v15, v15, v16);
`multiline${7}bigint`;
