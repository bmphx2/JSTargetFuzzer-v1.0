const v1 = new WeakMap();
const v3 = new Set();
function f4() {
    return Set;
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v1.e = f4;
    this.valueOf = a8;
    h = this;
    const o10 = {
        "apply": f4,
        "call": f4,
        "construct": a7,
        "defineProperty": f4,
        "deleteProperty": f4,
        "get": a7,
        "getOwnPropertyDescriptor": f4,
        "getPrototypeOf": f4,
        "isExtensible": F5,
        "ownKeys": f4,
        "preventExtensions": f4,
        "set": f4,
        "setPrototypeOf": f4,
    };
    new Proxy(this, o10);
    this.h = WeakMap;
}
const v13 = new F5(v3, F5);
const v14 = new F5(F5, v13);
new F5(v3, WeakMap);
new Float32Array(3163);
new Uint8ClampedArray(2943);
new Uint16Array(137);
function F25(a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = WeakMap;
    this.h = a28;
    this.a = WeakMap;
}
new F25(v14, v14, v1);
new F25(v14, v14, v13);
new F25(v13, v14, v13);
let v33 = Int16Array;
const v36 = new Float64Array(65);
[v33] = v36;
