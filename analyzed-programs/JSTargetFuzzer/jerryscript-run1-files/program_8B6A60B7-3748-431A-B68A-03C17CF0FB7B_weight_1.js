new Float32Array(4096);
new Uint32Array(5);
new Uint8ClampedArray(1600);
new Int32Array(6);
let v16 = Int16Array;
new v16(184);
const v20 = new Float64Array(65);
[v16] = v20;
const v28 = Symbol.iterator;
const o42 = {
    [v28]() {
        let v30 = 10;
        const o41 = {
            next() {
                v30--;
                let v34 = undefined;
                const o37 = {
                    get c() {
                        return v34 = arguments;
                    },
                };
                const o38 = {
                    ...o37,
                };
                const v39 = v30 == 0;
                const o40 = {
                    "done": v39,
                    "value": v30,
                };
                return o40;
            },
        };
        return o41;
    },
};
