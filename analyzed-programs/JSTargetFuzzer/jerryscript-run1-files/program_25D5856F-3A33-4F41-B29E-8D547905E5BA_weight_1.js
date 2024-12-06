function f0() {
    const o7 = {
        __proto__: "all",
        "h": "all",
        "g": 6,
        ["128"](a5) {
            const o6 = {
                "h": "128",
                ..."all",
            };
            const t10 = "128";
            t10.length <<= a5;
            return 6;
        },
    };
    return o7;
}
const o9 = {
};
try { Math.min(1073741823n); } catch (e) {}
Reflect.apply(("e").endsWith, o9);
const v16 = f0();
const v17 = f0();
const v18 = f0();
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a22;
    this.e = f0;
}
const v23 = new F19(v18, v17);
const v24 = new F19(v18, v17);
const v25 = new F19(F19, v16);
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v18;
    this.c = v24;
    this.b = F19;
}
const v31 = new F26(v25, v24, F26);
const v32 = new F26(F19, v24, v31);
new F26(v25, v23, v32);
const v39 = new Uint8Array(1000);
const v42 = new Int16Array(211);
new Uint8ClampedArray(16);
new Float32Array(1);
const v51 = new Uint8Array(1);
new Uint8Array(2);
for (let v55 = 0; v55 < 32; v55++) {
    v42["p" + v55] = v55;
}
f = v51;
const t51 = "seal";
t51[-160122027] = v39;
