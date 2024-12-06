const v5 = new Uint8ClampedArray(8);
const v8 = new BigUint64Array(8);
new Uint8ClampedArray(512);
function f14(a15, a16) {
    const o17 = {
        ...v8,
        ...v5,
    };
    return o17;
}
f14(129n, 8);
f14(-5534n, 512);
f14(36783n, 8);
-5534n >= 12n;
