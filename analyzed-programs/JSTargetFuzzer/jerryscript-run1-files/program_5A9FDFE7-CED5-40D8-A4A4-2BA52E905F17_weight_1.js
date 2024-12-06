new Int16Array(null);
new BigInt64Array(64);
new BigInt64Array(2824);
const v17 = [];
function f18() {
    return 2824;
}
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
}
const v24 = new F19(v17, v17, v17);
const o26 = {
    "defineProperty": f18,
};
const v28 = new Proxy(v24, o26);
function f29() {
    new BigUint64Array(5);
    new BigUint64Array(5);
    new Uint8Array(64);
    return f29;
}
function f39() {
    return o26;
}
Object.defineProperty(v28, -16, { configurable: true, get: f39, set: f29 });
