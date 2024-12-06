const v0 = [];
delete v0[-4096n];
v0.length = 0;
new Int32Array(16);
new Uint8ClampedArray(128);
const v17 = new Float64Array(1024);
class C18 {
    static a = 5n;
}
new C18();
new C18();
const v21 = new C18();
let v22 = "boolean";
function f25(a26) {
    const o33 = {
        "e": a26,
        "g": "caller",
        "d": a26,
        [a26]: a26,
        ...a26,
        get b() {
            let v28 = 0;
            while (v28 < 8) {
                a26.length = v28;
                a26 = "lDDC";
                ("caller").length;
                v28++;
            }
            return v28;
        },
        [-4096n]: v22,
        "a": a26,
        __proto__: v17,
        "b": 0,
        [v21]: Uint8ClampedArray,
    };
    return o33;
}
f25("caller");
f25(v22);
const v36 = f25("lDDC");
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a40;
    this.a = "lDDC";
}
const v41 = new F37(v22, "caller");
const v42 = new F37("caller", "caller");
new F37("caller", v22);
Math.log1p("bigint");
for (let i50 = 0, i51 = 10; i50 < i51, i51; i50++, i51--) {
    ("bigint")["search"]("bigint");
}
const v63 = ("lDDC")[-43999n];
v36.valueOf = v63;
Object.defineProperty(v42, 0, { enumerable: true, get: f25 });
if (v63) {
    v22 = "lDDC";
} else {
    let v64;
    try { v64 = new v63(-128n, v41); } catch (e) {}
    v64 ^= v41;
}
("caller")["repeat"](v63);
