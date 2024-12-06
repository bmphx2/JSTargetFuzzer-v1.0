const v2 = new Uint8Array(3);
new Int16Array(3401);
const v8 = new BigUint64Array(1000);
v8[null] = 2;
function f13(a14, a15, a16) {
    v2 < a14;
    let v18;
    try { v18 = v2.join(a16); } catch (e) {}
    return v18;
}
f13(3, 3, 3401);
const o20 = {
    "defineProperty": f13,
    "deleteProperty": f13,
    "getOwnPropertyDescriptor": f13,
    "getPrototypeOf": f13,
    "has": f13,
    "isExtensible": f13,
    "ownKeys": f13,
    "set": f13,
};
new Proxy(v2, o20);
