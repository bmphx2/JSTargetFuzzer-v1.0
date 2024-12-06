[];
new Int32Array(16);
new Uint8ClampedArray(128);
new Float64Array(1024);
let v13 = "boolean";
function f16(a17) {
    const o24 = {
        "e": a17,
        "g": "caller",
        "d": a17,
        [a17]: a17,
        ...a17,
        get b() {
            let v19 = 0;
            while (v19 < 8) {
                a17.length = v19;
                a17 = "lDDC";
                ("caller").length;
                v19++;
            }
            return v19;
        },
    };
    return o24;
}
f16("caller");
f16(v13);
const v27 = f16("lDDC");
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a31;
    this.a = "lDDC";
}
const v32 = new F28(v13, "caller");
const v33 = new F28("caller", "caller");
new F28("caller", v13);
Math.log1p("bigint");
for (let i41 = 0, i42 = 10; i41 < i42, i42; i41++, i42--) {
    ("bigint")["search"]("bigint");
}
const v54 = ("lDDC")[-43999n];
v27.valueOf = v54;
Object.defineProperty(v33, 0, { enumerable: true, get: f16 });
if (v54) {
    v13 = "lDDC";
} else {
    let v55;
    try { v55 = new v54(-128n, v32); } catch (e) {}
    v55 ^= v32;
}
("caller")["repeat"](v54);
