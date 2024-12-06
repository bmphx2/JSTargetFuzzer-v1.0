function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -128;
}
new F3(-8);
const v7 = new F3(-8);
const v8 = new F3(-8);
function f9() {
    return -8;
}
new Uint32Array(16);
new BigInt64Array(6);
v7.__proto__ = v8;
const o17 = {
    "call": f9,
    "getPrototypeOf": f9,
};
new Proxy(v7, o17);
new Uint8ClampedArray(10);
const v23 = [];
function f24(a25) {
    return v23;
}
v23.map(f24);
