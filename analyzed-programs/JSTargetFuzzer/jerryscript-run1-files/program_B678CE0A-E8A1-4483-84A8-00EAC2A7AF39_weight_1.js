new Uint32Array(235);
const v8 = new Uint8Array(64);
new BigInt64Array(1076);
try {
    new BigUint64Array(-1024);
} catch(e14) {
} finally {
}
const v19 = [5.713949740473524e+306,8.575593506499948e+305];
const v20 = v19.push(1073741823, 59072);
try { v8.subarray(v20, 1073741823); } catch (e) {}
v19[2147483649] = -1;
const v27 = new Uint8Array(1000);
const v29 = new Int16Array(v27, 1000, 1000);
for (let v30 = 0; v30 < 32; v30++) {
    v29["p" + v30] = v30;
}
Math[Symbol.toStringTag] = WeakMap;
