function f3(a4, a5) {
    const o10 = {
        "a": 536870888,
        "e": a5,
        [a5](a7, a8) {
            try { this.valueOf(a8); } catch (e) {}
            return this;
        },
        "d": a5,
        ...a4,
        "g": a4,
        "b": 60507,
        7: 536870888,
    };
    return o10;
}
const v11 = f3(60507, 8);
const v12 = f3(8, 60507);
const v13 = f3(536870888, 536870888);
function f14(a15, a16, a17, a18) {
    const o23 = {
        ...v11,
        ...v13,
        4294967295: v13,
        "c": a15,
        "b": a15,
        get d() {
            for (let v20 = 0; v20 < 32; v20++) {
                this["p" + v20] = v20;
            }
            return a18;
        },
    };
    return o23;
}
f14(536870888, v13, 8, f3);
f14(60507, v12, 60507, v12);
f14(536870888, v13, 60507, v11);
const v32 = new Uint32Array(3);
const v35 = new Uint8Array(10);
const v38 = new Uint32Array(21);
[2.220446049250313e-16,NaN,1000.0,-Infinity,-2.0,0.8418049481265658];
const v40 = [-2.2250738585072014e-308];
const v41 = [0.5565764498837954];
try {
    v32[5] = v38;
} finally {
    v35.valueOf = 10;
    try { v40.reduce(536870912); } catch (e) {}
}
+v41;
