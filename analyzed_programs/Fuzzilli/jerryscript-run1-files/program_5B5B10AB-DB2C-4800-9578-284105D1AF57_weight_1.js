new Set();
function f2() {
    return Set;
}
const v10 = new WeakMap();
v10.toString = f2;
v10[-5.352484084538196e+307] |= 4.0;
const o13 = {
    "maxByteLength": 4017097005,
};
const v15 = new SharedArrayBuffer(3, o13);
new BigInt64Array(v15);
