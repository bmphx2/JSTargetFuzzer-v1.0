function f6() {
    return 0;
}
new Uint8ClampedArray(2);
new Int32Array(127);
const v15 = new BigInt64Array(14);
f6();
Object.defineProperty(v15, Uint8ClampedArray, { writable: true, configurable: true, set: f6 });
f6();
v15[Symbol.iterator];
new BigInt64Array(8);
new Uint8Array(257);
new Uint8ClampedArray(10);
