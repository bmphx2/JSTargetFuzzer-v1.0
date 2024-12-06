function f9(a10, a11) {
    const o24 = {
        "h": a11,
        [a10](a13, a14) {
            let v17 = -9007199254740991;
            const v19 = v17 ^ a14;
            let v20 = --v17;
            v20++;
            ~8 >> v19;
            return v17;
        },
        "e": a10,
        "b": a11,
    };
    return a11;
}
f9("unicode", f9);
f9("byteLength", 8);
const v27 = f9("byteLength", 65535);
new Uint8ClampedArray(5);
new Float32Array(v27);
new Uint16Array(2845);
new Array(0);
for (const v53 in Array) {
    for (let v54 = 0; v54 < 32; v54++) {
        const t25 = -268435456;
        t25["p" + v54] = v54;
    }
}
Object.defineProperty(Array, 14, { configurable: true, enumerable: true, get: Array, set: Array });
