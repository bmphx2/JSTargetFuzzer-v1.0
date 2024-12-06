function f7(a8, a9, a10, a11) {
    const o24 = {
        set e(a13) {
            let v14;
            try { v14 = new a13(1858295584, this, this, undefined); } catch (e) {}
            const v15 = this;
            const v20 = 1.0 >>> -1513374395;
            -1513374395 || 1.0;
            1.0 + v14;
            v20 * v14;
        },
    };
    return o24;
}
f7(536870887, 4096, 65535, f7(65535, 65536, 4096, 4096));
f7(1858295584, -268435456, 1858295584, 65536);
new Uint16Array(11);
const v33 = new Int8Array(6);
const v36 = new Uint8ClampedArray(127);
v36.__proto__ = v36;
v33.toString = f7;
const o37 = {
    "apply": f7,
    "construct": f7,
    "defineProperty": f7,
    "deleteProperty": f7,
    "getOwnPropertyDescriptor": f7,
    "getPrototypeOf": f7,
    "has": f7,
    "isExtensible": f7,
    "ownKeys": f7,
    "set": f7,
    "setPrototypeOf": f7,
};
new Proxy(v33, o37);
