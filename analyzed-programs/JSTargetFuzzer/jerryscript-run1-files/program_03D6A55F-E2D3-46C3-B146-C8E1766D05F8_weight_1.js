new Uint8Array(3867);
new Int16Array(16);
new BigUint64Array(3307);
const v12 = Symbol.iterator;
const o21 = {
    [v12]() {
        let v14 = 10;
        const o20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                const o19 = {
                    "done": v18,
                    "value": v14,
                };
                return o19;
            },
        };
        return o20;
    },
};
function f23(a24, a25) {
    a24 instanceof a24;
    return f23;
}
const v28 = new Promise(f23);
v28.finally(f23);
