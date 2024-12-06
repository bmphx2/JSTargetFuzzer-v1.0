new Uint16Array(9);
new Uint32Array(4);
new BigInt64Array(2);
new Float32Array(0);
new Int32Array(3135);
new Uint16Array(6);
const v19 = Symbol.iterator;
const o28 = {
    [v19]() {
        let v21 = 10;
        const o27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                const o26 = {
                    "done": v25,
                    "value": v21,
                };
                return o26;
            },
        };
        return o27;
    },
};
