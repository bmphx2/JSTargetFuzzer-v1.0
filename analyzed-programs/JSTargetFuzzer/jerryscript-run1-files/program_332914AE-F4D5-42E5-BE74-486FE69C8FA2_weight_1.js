const v2 = new BigInt64Array(128);
new Float32Array(1987);
new Uint32Array(9);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 128;
    this.a = a12;
}
new F9(128, Uint32Array, v2, 128);
const v16 = new F9(128, Uint32Array, Float32Array, 128);
new F9(1987, 128, v16, 128);
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
