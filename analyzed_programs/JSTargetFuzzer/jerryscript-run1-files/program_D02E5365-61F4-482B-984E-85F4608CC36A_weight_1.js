new Int32Array(6);
let v16 = Int16Array;
new v16(184);
let v18 = 65;
const v20 = new Float64Array(v18);
[v16] = v20;
Symbol.iterator;
const o37 = {
    [v16]() {
        const o36 = {
            next() {
                v18--;
                const v34 = 10 == 0;
                const o35 = {
                    "done": v34,
                    "value": -65537,
                };
                return "o";
            },
        };
        return o36;
    },
};
