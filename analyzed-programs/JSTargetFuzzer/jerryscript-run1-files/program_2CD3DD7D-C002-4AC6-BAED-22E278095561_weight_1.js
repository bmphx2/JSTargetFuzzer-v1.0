function f0() {
    const o16 = {
        [65535]: 21557,
        __proto__: 65535,
        "a": 9,
        "d": 9,
        2021897140: 21557,
        "e": 9,
        set b(a5) {
            function f6(a7, a8) {
                +a8;
                const v13 = Math.expm1(a8);
                a8 & a5;
                return v13;
            }
            f6(21557, a5);
        },
    };
    return o16;
}
const v17 = f0();
f0();
const v19 = f0();
const v22 = new Uint8Array(64);
const v25 = new Int8Array(6);
const v28 = new Float64Array(16);
let v32;
try { v32 = v28.reduce(f0, 29904n); } catch (e) {}
for (let i34 = 0; i34 < 0; i34++) {
    v32[i34] ^= i34;
    v22[8] = v17;
    v19.d;
    v25[i34];
}
