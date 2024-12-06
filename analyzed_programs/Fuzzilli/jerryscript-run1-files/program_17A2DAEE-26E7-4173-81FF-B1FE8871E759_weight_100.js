-Infinity;
new Uint16Array(256);
new Float64Array(129);
new Float32Array(7);
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
