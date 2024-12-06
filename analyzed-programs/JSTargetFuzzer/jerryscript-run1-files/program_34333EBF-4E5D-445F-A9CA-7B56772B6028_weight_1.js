new BigInt64Array(1000);
const o4 = {
};
const v6 = new Proxy(BigInt64Array, o4);
try {
const t0 = 1000;
t0(v6);
} catch (e) {}
new Int16Array(2910);
new Uint8ClampedArray(34);
function f16(a17, a18, a19) {
    return f16;
}
const v21 = new Uint32Array();
const o22 = {
};
const v24 = new Proxy(v21, o22);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    v24.toString = a28;
}
const v31 = new F25();
new F25(Proxy, v31, v31, v21);
