const o10 = {
    ...this,
};
const v12 = Symbol.iterator;
const o22 = {
    [v12]() {
        let v14 = 10;
        const o21 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                const o19 = {
                    "done": v18,
                    "value": v14,
                };
                /o\u0060(?: foo )/yisu;
                return o19;
            },
        };
        return o21;
    },
};
const v30 = BigInt64Array.__proto__;
try { new v30(BigInt64Array, BigInt64Array, v30, BigInt64Array); } catch (e) {}
