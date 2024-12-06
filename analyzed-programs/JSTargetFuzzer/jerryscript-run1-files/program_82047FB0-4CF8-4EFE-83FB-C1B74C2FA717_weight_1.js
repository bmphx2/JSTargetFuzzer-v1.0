[];
const v6 = new SyntaxError(2);
const v9 = new BigInt64Array(2);
new Int32Array(256);
function f13(a14, a15, a16, a17) {
    const o27 = {
        o(a19, a20, a21, a22) {
            const v24 = Symbol.toPrimitive;
            const o26 = {
                [v24]() {
                    v6.buffer = this;
                    return a14;
                },
            };
            return a22;
        },
        "h": v9,
        ..."object",
        10: a16,
    };
    return o27;
}
f13(2, "A", "object", 2);
f13(2, "57409", f13, 2);
f13(256, "A", 256, 2);
const v32 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v32.buffer.arguments;
