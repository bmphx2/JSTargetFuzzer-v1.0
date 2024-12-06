new Float32Array(420);
new Int32Array(61);
new Uint32Array(6);
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
const v31 = new BigUint64Array(16);
v31.copyWithin();
let v33 = 1n;
v33 %= 2147483648n;
