function f0() {
}
const v2 = new WeakMap();
const v5 = new Int8Array(1);
const v8 = new Int32Array(10);
new BigInt64Array(64);
const v13 = v8["slice"]();
try { v13(); } catch (e) {}
Object.defineProperty("slice", "h", { configurable: true, enumerable: true, set: f0 });
v8["slice"] ^= v13;
v2 / v2;
v5.length = 0;
