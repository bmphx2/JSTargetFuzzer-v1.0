new Int32Array(6);
let v16 = Int16Array;
new v16(184);
const v20 = new Float64Array(65);
[v16] = v20;
const v28 = Symbol.iterator;
const o37 = {
    [v28]() {
        let v30 = 10;
        const o36 = {
            next() {
                v30--;
                const v34 = v30 == 0;
                const o35 = {
                    "done": v34,
                    "value": v30,
                };
                return this;
            },
        };
        return o36;
    },
};
