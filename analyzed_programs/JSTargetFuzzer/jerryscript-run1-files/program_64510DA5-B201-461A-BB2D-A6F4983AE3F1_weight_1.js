const v2 = new BigUint64Array(0);
new BigUint64Array(127);
delete v2[4082];
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                    "value": v11,
                };
                return o16;
            },
        };
        return o17;
    },
};
new Int8Array(0);
new Float32Array(9);
new Uint8Array(2784);
new Int8Array(2338);
function* f37(a38, a39, a40, a41) {
    yield* a40;
    return a39;
}
f37(f37, "object", "object", "object");
