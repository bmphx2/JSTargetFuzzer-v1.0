new Uint16Array(2);
new Uint32Array(1098);
const v8 = new Uint16Array(392);
let v12 = v8[Uint32Array];
try { v8.reduceRight(v12, 7n); } catch (e) {}
v8[2] = 2;
v12 *= Uint16Array;
const v15 = Symbol.iterator;
const o24 = {
    [v15]() {
        let v17 = 10;
        const o23 = {
            next() {
                v17--;
                const v21 = v17 == 0;
                const o22 = {
                    "done": v21,
                    "value": v17,
                };
                return o22;
            },
        };
        return o23;
    },
};
