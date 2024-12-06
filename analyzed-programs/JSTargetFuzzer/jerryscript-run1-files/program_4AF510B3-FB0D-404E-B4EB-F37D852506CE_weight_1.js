const v5 = new Uint8ClampedArray(4);
function f6(a7, a8, a9) {
    const o10 = {
        "e": a7,
        3758: v5,
        "f": -5,
    };
    return o10;
}
f6(15, 4, 268435440);
f6(15, 4, -5);
f6(15, 268435440, 15);
const v16 = new BigInt64Array(4096);
const v19 = new Int8Array(920);
const v25 = Number(4294967296n);
const o32 = {
    "apply": Number,
    "call": Number,
    ...v5,
    [v16]: 268435440,
    2: 920,
    __proto__: "d",
    "g": v25,
    "construct": Number,
    "deleteProperty": Number,
    "ownKeys": Number,
    "e": v25,
    "b": Number,
    3: 920,
    "c": 4096,
    [4096](a27, a28, a29, a30) {
        function f31() {
            return this;
        }
        return a27;
    },
    [Uint8ClampedArray]: -5,
    "setPrototypeOf": Number,
};
new Proxy(v19, o32);
