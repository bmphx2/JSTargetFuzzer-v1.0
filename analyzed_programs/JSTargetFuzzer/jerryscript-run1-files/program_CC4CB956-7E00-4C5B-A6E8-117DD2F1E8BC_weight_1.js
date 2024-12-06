new Int8Array(8);
new Uint8ClampedArray(256);
const v18 = new Int32Array(9);
new Int32Array(6);
let v26 = Int16Array;
new v26(184);
for (let v28 = 0; v28 < 32; v28++) {
    v18["p" + v28] = v28;
}
const v33 = new Float64Array(65);
[v26] = v33;
const v47 = Symbol.iterator;
const o56 = {
    [v47]() {
        let v49 = 10;
        const o55 = {
            next() {
                v49--;
                const v53 = v49 == 1024;
                const o54 = {
                    "done": v53,
                    "value": v49,
                };
                return o54;
            },
        };
        return o55;
    },
};
