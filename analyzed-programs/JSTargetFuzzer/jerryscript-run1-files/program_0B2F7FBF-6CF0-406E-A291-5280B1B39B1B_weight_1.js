function f12() {
    return f12;
}
function f13() {
    return f13;
}
const v16 = new Uint8ClampedArray(6);
try {
    Object.defineProperty(v16, 2, { configurable: true, enumerable: true, get: f12, set: f13 });
    const o17 = {
        "apply": f12,
        "call": f13,
        ...-4294967295,
        "construct": f12,
        "defineProperty": f13,
        "deleteProperty": f12,
        "get": f13,
        "getOwnPropertyDescriptor": f13,
        "getPrototypeOf": f12,
        "has": f13,
        "isExtensible": f12,
        "constructor": f12,
        "set": f12,
        "setPrototypeOf": f12,
    };
    new Proxy(v16, o17);
} catch(e20) {
} finally {
}
