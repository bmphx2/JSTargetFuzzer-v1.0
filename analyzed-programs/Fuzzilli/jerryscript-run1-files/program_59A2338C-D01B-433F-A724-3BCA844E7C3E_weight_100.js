function f6(a7, a8, a9) {
    const o20 = {
        ["shift"](a11, a12, a13) {
            try { a8(); } catch (e) {}
            Math.log2(-2147483649n);
            Math.cos(-2147483649n - -2147483649n);
            return a8;
        },
        "c": 10000n,
    };
    return o20;
}
const v21 = f6(9007199254740990n, "shift", "setUTCFullYear");
const v22 = f6(9007199254740990n, "shift", "setUTCFullYear");
const v23 = f6(10000n, "-1024", "shift");
const t15 = "setUTCFullYear";
t15.__proto__ = "setUTCFullYear";
function f24(a25, a26) {
    const o27 = {
        8: "setUTCFullYear",
        [-2147483649n]: v23,
        __proto__: a26,
    };
    return o27;
}
f24(v22, v23);
f24(v23, v22);
f24(v22, v21);
