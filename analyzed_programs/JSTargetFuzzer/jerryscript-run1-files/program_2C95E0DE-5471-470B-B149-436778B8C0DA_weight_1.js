new Int8Array(16);
new BigInt64Array(1000);
new Uint16Array(1000);
new Int32Array(6);
let v19 = Int16Array;
new v19(16);
const v23 = new Float64Array(65);
[v19] = v23;
(16).iterator;
const o40 = {
    [-65537]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": -9007199254740991,
                };
                return this;
            },
        };
        return o39;
    },
};
