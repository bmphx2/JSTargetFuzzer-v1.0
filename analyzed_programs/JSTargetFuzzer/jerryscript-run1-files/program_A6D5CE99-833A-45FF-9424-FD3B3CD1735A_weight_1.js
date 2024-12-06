function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -2147483647;
    this.f = -2147483647;
    this.e = -2147483647;
}
new F0();
new F0();
new F0();
new Set();
new Map();
new Int32Array(13);
new Uint32Array(10000);
new BigInt64Array(12);
new Int32Array(13);
let v29 = Int16Array;
new v29(184);
const v33 = new Float64Array(6);
[v29] = v33;
const v41 = Symbol.iterator;
const o50 = {
    [v41]() {
        let v43 = 10;
        const o49 = {
            next() {
                v43--;
                const v47 = v43 == 0;
                const o48 = {
                    "done": v47,
                    "value": v43,
                };
                return this;
            },
        };
        return v41;
    },
};
