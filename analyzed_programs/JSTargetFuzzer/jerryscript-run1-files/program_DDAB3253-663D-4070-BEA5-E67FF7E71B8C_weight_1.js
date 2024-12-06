new Uint32Array(3218);
new Uint16Array(5);
new Uint8Array(1369);
new Int8Array(257);
new BigInt64Array(16);
new Int32Array(0);
const v18 = [];
function f19() {
    return v18;
}
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F20(v18, v18, v18);
const o27 = {
    "defineProperty": f19,
};
const v29 = new Proxy(v25, o27);
function f30() {
    return f30;
}
function f31() {
    return v25;
}
Object.defineProperty(v29, -16, { configurable: true, get: f31, set: f30 });
