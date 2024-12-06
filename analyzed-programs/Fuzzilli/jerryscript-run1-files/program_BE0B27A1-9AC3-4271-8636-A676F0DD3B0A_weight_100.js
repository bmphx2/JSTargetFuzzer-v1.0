function f1() {
    const o10 = {
        n() {
            this[true] << this;
            return this;
        },
        [true]: true,
        __proto__: true,
        set d(a6) {
            ("-16").normalize("NFD");
        },
        "g": true,
        ...true,
        "d": true,
    };
    return o10;
}
f1();
const v12 = f1();
const v13 = f1();
const v19 = new BigInt64Array(2025);
const v22 = new Uint8ClampedArray(916);
const v25 = new Int8Array(47);
try { v25.fill(v22); } catch (e) {}
let v27 = 0;
do {
    v12.g *= v27;
    v13["n"](f1, v22);
    for (let v30 = 0; v30 < 32; v30++) {
        v19["p" + v30] = v30;
    }
    v27++;
} while (v27 < 4)
