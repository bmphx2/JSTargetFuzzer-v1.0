function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 65535;
    this.e = a5;
}
new F3(65535);
const v7 = new F3(51222);
const v8 = new F3(65535);
with (v8) {
    e = v8;
    delete v8[F3 ^ v7];
}
new Float64Array(6);
const v16 = new BigUint64Array(1);
const v19 = new Uint32Array(1938);
let v20 = 2732;
const v22 = new Int8Array(v20);
new Uint8ClampedArray(4026);
const v28 = new BigUint64Array(129);
function f29(a30, a31, a32, a33) {
    const o38 = {
        toString(a35, a36) {
            v28[1073741823] = Int8Array;
            this.length = 0;
            return 0;
        },
        2: BigUint64Array,
        "b": 4026,
        [a32]: 1938,
        __proto__: v22,
        ...v19,
        "a": v16,
        "e": a33,
        "d": a30,
        /*
        __proto__: v22,
        */
    };
    return o38;
}
f29(129, 4026, 129, 129);
f29(v20, 4026, v20, 129);
const v41 = f29(4026, v20, v20, v20);
if (Uint8ClampedArray >= v41) {
    const o43 = {
        "construct": f29,
        "getOwnPropertyDescriptor": f29,
        "isExtensible": f29,
        "preventExtensions": f29,
        "set": f29,
    };
    new Proxy(v16, o43);
} else {
    v7.__proto__;
}
v41[129] = v41[0];
v20 = 4026;
new Uint8ClampedArray(256);
new Uint8ClampedArray(3);
new BigInt64Array(3);
