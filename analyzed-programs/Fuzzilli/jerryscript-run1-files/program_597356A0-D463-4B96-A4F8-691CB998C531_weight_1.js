function f0() {
    const o16 = {
        ["o"](a5, a6) {
            new Int8Array(1735);
            new Uint32Array(3052);
            new Float64Array(248);
            return 1735;
        },
    };
    return o16;
}
f0();
const v18 = f0();
const v19 = f0();
const v21 = new WeakMap();
for (let v28 = 0; v28 < 32; v28++) {
    v21["p" + v28] = v28;
}
try { v18["of"](536870889n, v18, 9.72112005996396e+307, 9.72112005996396e+307); } catch (e) {}
f0 = WeakMap;
v19["of"] = 536870889n;
