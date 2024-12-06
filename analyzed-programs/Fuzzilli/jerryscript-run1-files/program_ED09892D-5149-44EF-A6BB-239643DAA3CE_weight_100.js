const v2 = new Int8Array(8);
new Uint32Array(8);
const v8 = new BigInt64Array(15);
function f9(a10, a11, a12) {
    const o19 = {
        __proto__: v2,
        1073741824: a12,
        "h": 4067,
        toString(a14, a15, a16, a17) {
            a17 = Int8Array;
            var e = a10;
            return v8[a10];
        },
        "d": 15,
    };
    return a10;
}
f9(Uint32Array, 15, 8);
f9(f9(Uint32Array, 4067, 15), 4067, 4067);
const v24 = Symbol.toPrimitive;
const o31 = {
    [v24]() {
        try {
            function f26(a27, a28, a29) {
                return this;
            }
        } catch(e30) {
        }
    },
};
