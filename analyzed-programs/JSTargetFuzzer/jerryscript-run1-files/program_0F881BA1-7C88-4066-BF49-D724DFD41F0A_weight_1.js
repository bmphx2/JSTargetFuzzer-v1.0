function f0() {
}
f0();
f0();
new Set();
const v13 = Symbol.iterator;
const o22 = {
    [v13]() {
        let v15 = 10;
        const o21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                const o20 = {
                    "done": v19,
                    "value": v15,
                };
                return o20;
            },
        };
        return o21;
    },
};
new Float32Array(956);
new Int32Array(208);
new BigInt64Array(1024);
("a").localeCompare();
if (Set) {
    o22[Symbol.split];
} else {
}
