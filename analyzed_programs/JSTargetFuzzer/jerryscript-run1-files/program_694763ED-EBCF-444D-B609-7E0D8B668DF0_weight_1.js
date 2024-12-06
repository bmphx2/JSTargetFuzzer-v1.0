const v10 = Symbol.iterator;
const o20 = {
    [v10]() {
        let v12 = 10;
        const o19 = {
            next() {
                v12--;
                const v16 = v12 == 0;
                const o17 = {
                    "done": v16,
                    "value": v12,
                };
                /o\u0060(?: foo )/yisu;
                return o17;
            },
        };
        return o19;
    },
};
const v28 = BigInt64Array.__proto__;
try { new v28(BigInt64Array, BigInt64Array, v28, BigInt64Array); } catch (e) {}
