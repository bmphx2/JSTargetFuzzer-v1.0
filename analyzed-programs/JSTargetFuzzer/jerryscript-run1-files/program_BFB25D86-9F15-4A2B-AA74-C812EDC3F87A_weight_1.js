function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 15;
    this.c = 15;
    this.d = 15;
}
const v3 = new F0();
let v4 = new F0();
new F0();
new Uint8ClampedArray(512);
const v11 = new Int16Array(6);
for (let v16 = 0; v16 < 32; v16++) {
    v4["p" + v16] = v16;
}
new BigUint64Array(3503);
function f21() {
    return 512;
}
const v23 = new Set();
v23.delete(v23["add"]());
v4 <<= v3;
const o30 = {
    "apply": f21,
    "call": f21,
    "construct": f21,
    "defineProperty": f21,
    "deleteProperty": f21,
    "get": f21,
    "getOwnPropertyDescriptor": f21,
    "isExtensible": f21,
    "ownKeys": f21,
    "preventExtensions": f21,
    "set": f21,
    "setPrototypeOf": f21,
};
new Proxy(v11, o30);
