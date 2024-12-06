new Uint8ClampedArray(Uint8ClampedArray);
new Uint16Array(Uint16Array);
new Uint32Array(256);
new Float32Array(16);
new BigUint64Array(5);
new BigInt64Array(Uint8ClampedArray);
function f18() {
    return BigUint64Array;
}
Array.from(BigInt64Array, f18, [1073741824,-9223372036854775808,-10]);
