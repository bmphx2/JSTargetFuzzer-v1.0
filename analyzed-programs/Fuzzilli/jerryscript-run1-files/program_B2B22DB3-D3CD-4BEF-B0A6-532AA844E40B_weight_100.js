class C3 {
    static #o(a5, a6) {
        new Uint32Array(4004);
        new Uint8Array(16);
        new Uint8ClampedArray(11);
        return 24450;
    }
    f;
}
new C3();
const v17 = new C3();
new C3();
function f22() {
    return "callee";
}
const o26 = {
    "call": f22,
    "defineProperty": f22,
    "deleteProperty": f22,
    "getPrototypeOf": f22,
    "has": f22,
    "isExtensible": f22,
    "preventExtensions": f22,
    "set": f22,
    "setPrototypeOf": f22,
};
new Proxy(v17, o26);
