function f0() {
    const o10 = {
        ["a"]: 1.0,
        set h(a5) {
            const v7 = new Map();
            ("a").length;
            const t5 = "a";
            t5.__proto__ = v7;
            ("a")[-46965];
        },
        ..."a",
        __proto__: "a",
        "c": -46965,
        "f": 1.0,
        "h": 1.0,
        "b": 1.0,
        "a": -46965,
    };
    return o10;
}
const v11 = f0();
f0();
const v13 = f0();
function f27(a28, a29) {
    const o30 = {
        "f": a28,
        __proto__: v13,
        "e": a29,
        ...v11,
        "c": v11,
    };
    return o30;
}
const v31 = f27();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v31, 32753n, { enumerable: true, get: f27 });
}
