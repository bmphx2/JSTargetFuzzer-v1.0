function f0() {
    const o6 = {
        get e() {
            this.__proto__ = this;
            function f5() {
                return -1000000.0;
            }
            return this;
        },
        "a": -1e-15,
        9: -1e-15,
        "f": -1e-15,
        __proto__: -1000000.0,
        [-5.0]: -1e-15,
        ...-1e-15,
        "c": -1e-15,
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
function f10(a11, a12) {
    const o23 = {
        "e": v7,
        "h": a11,
        "f": v7,
        [v7]: a11,
        "d": a12,
        "c": a12,
        [v8](a14, a15) {
            const v16 = super.e;
            v16.b = v16;
            Math.abs(-492847422);
            const v20 = +-492847422;
            Math.hypot(v8);
            -492847422 | v20;
            return -492847422;
        },
    };
    return o23;
}
f10(v8, v7);
f10(v9, v9);
f10(v9, v8);
for (let v35 = 0; v35 < 32; v35++) {
    v8["p" + v35] = v35;
}
const v39 = [f0,0n,964329252n,0n];
let v40 = [964329252n,964329252n,v39,v39];
const v41 = [v40,v40,v39,964329252n,0n];
const v42 = [1024n,v40];
[v41,0n];
const v44 = [v40];
const t54 = "fdNr";
t54[0] = 1024n;
try {
const t0 = "localeCompare";
new t0(v39, v44, v44, 58270, v8);
} catch (e) {}
async function* f52(a53, a54, a55) {
    ({"length":a53,...v40} = a54);
    yield v39;
    await a53;
    yield "fdNr";
    return a53;
}
f52(58270, v42, "toString");
