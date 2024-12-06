new Float32Array(174);
new Uint8ClampedArray(1);
const v8 = new BigUint64Array(6);
try { Uint8ClampedArray("h", 174, 1); } catch (e) {}
const v16 = v8[BigUint64Array];
for (const v17 of v16) {
    10n ** v17;
    Math.round(v16);
    let v24 = ~(v16 << -9223372036854775808);
    Math.fround(v16);
    +(++v24);
}
