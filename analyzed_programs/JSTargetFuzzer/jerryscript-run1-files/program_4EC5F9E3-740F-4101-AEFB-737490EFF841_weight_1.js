const v2 = new BigInt64Array(512);
let v4 = BigInt64Array;
new v4(127);
const v8 = new Float32Array(64);
function f9(a10, a11, a12) {
    const o26 = {
        "a": a11,
        [a11]: 512,
        ...v2,
        ...v2,
        [-1]: 512,
        set g(a14) {
            a11 < this;
            a12.b /= 64;
            v4 = a12;
            new BigInt64Array(1);
            new Uint8ClampedArray(153);
            const v24 = new Uint32Array(255);
            super.g = a14 = v2;
            function f25() {
                return a11;
            }
            v24.a = a11;
        },
    };
    return o26;
}
f9(v2, 512, BigInt64Array);
const v28 = f9(v8, 127, v2);
f9(Float32Array, 64, f9);
function f32(a33) {
    return arguments;
}
const v35 = f32(5, Uint32Array);
function f36(a37, a38) {
    const o39 = {
        ...v35,
    };
    return o39;
}
const v40 = f36();
delete v28[5];
v40.__proto__;
const o43 = {
    "apply": f32,
    "call": f9,
    "construct": f36,
    "defineProperty": f9,
    "deleteProperty": f32,
    "getOwnPropertyDescriptor": f36,
    "getPrototypeOf": f32,
    "has": f32,
    "isExtensible": f9,
    "ownKeys": f9,
    "preventExtensions": f9,
    "set": f9,
    "setPrototypeOf": f36,
};
new Proxy(v35, o43);
f36();
