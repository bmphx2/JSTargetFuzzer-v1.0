new Uint8ClampedArray(64);
new Float32Array(1114);
new Uint32Array(2);
function f21(a22, a23, a24) {
    const o35 = {
        ["shift"](a26, a27, a28) {
            try { a23(); } catch (e) {}
            a24.log2(-2147483649n);
            Math.cos(-2147483649n - -2147483649n);
            return a23;
        },
        "c": -5,
    };
    return o35;
}
const v36 = f21(9007199254740990n, "shift", "setUTCFullYear");
const v37 = f21(9007199254740990n, "shift", "setUTCFullYear");
const v38 = f21(10000n, "-1024", "shift");
const t18 = "setUTCFullYear";
t18.__proto__ = "setUTCFullYear";
function f39(a40, a41) {
    const o42 = {
        8: "setUTCFullYear",
        [-2147483649n]: v38,
        __proto__: a41,
    };
    return o42;
}
f39(v37, v38);
f39(v38, v37);
f39(v37, v36);
