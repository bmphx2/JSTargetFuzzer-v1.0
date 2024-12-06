function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 15;
    this.c = 15;
    this.d = 15;
}
new F0();
let v4 = new F0();
const v5 = new F0();
const v8 = new Uint8ClampedArray(F0);
const v11 = new Int16Array(6);
for (let v16 = 0; v16 < 32; v16++) {
    v4["p" + v16] = v8;
}
new BigUint64Array(3503);
function f21() {
    return 512;
}
("-1604200484").__proto__;
try { new v5(); } catch (e) {}
const v26 = new Set();
v4 <<= v26.delete(v26["add"]());
const o33 = {
    "apply": f21,
    "call": f21,
    "construct": f21,
    "defineProperty": f21,
    "deleteProperty": f21,
    "get": f21,
    "getOwnPropertyDescriptor": f21,
    "isExtensible": f21,
    "ownKeys": "-1604200484",
    "preventExtensions": "add",
    "set": f21,
    "setPrototypeOf": f21,
};
new Proxy(v11, o33);
