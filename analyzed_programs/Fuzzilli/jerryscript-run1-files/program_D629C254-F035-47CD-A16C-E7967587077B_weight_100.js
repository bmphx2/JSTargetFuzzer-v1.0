[];
const v5 = Symbol.iterator;
const o14 = {
    [v5]() {
        let v7 = 10;
        const o13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                const o12 = {
                    "done": v11,
                    "value": v7,
                };
                return o12;
            },
        };
        return o13;
    },
};
let v19 = Int8Array;
new v19(290);
const v23 = new BigUint64Array(1);
new Uint8Array(87);
const v28 = ([10,0]).shift();
try { v28(v28, v28, 87, BigUint64Array); } catch (e) {}
o14.valueOf = v28;
({"byteLength":v19,} = v23);
