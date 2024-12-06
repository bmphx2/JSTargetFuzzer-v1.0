function f0() {
}
new Uint8ClampedArray(64);
new Float32Array(9);
new Float64Array(257);
new Int8Array(9);
new Int32Array(1145);
new Uint16Array(5);
new Int32Array(6);
let v23 = Int16Array;
const v24 = new v23(184);
const v27 = new Float64Array(65);
[v23] = v27;
Symbol.iterator;
const o44 = {
    [6]() {
        let v37 = 10;
        const o43 = {
            next() {
                v37--;
                const v41 = v37 == 0;
                const o42 = {
                    "done": v41,
                    "value": f0,
                };
                return v24;
            },
        };
        return o43;
    },
};
