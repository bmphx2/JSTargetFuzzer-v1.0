const v2 = new BigInt64Array(64);
const v5 = new BigUint64Array(4096);
const v8 = new Float32Array(255);
if (BigInt64Array) {
    try { BigInt64Array(-28923, 10, 2); } catch (e) {}
} else {
    v8["find"](ReferenceError, v5);
}
let v19;
try { v19 = v2.indexOf(v8); } catch (e) {}
v19 >>= v19;
v5[8];
