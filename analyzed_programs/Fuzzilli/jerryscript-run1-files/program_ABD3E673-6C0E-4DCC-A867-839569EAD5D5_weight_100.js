const v2 = new Uint8Array(3803);
const v5 = new BigInt64Array(577);
new Uint16Array(128);
const v12 = new BigInt64Array(577, 3803, 128);
const v13 = v5[2];
let {"byteLength":v14,} = v2;
v14 |= 3803;
try { v13(v12); } catch (e) {}
const v17 = Symbol.iterator;
const o26 = {
    [v17]() {
        let v19 = 10;
        const o25 = {
            next() {
                v19--;
                const v23 = v19 == 0;
                const o24 = {
                    "done": v23,
                    "value": v19,
                };
                return o24;
            },
        };
        return o25;
    },
};
