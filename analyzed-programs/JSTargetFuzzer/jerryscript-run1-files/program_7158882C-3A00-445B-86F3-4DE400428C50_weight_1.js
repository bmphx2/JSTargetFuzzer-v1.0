const v2 = new Uint8Array(6);
const v5 = 1 << v2;
try { v2.includes(v5, ...1, 6, Uint8Array, v5, 1); } catch (e) {}
for (let v7 = 0; v7 < 32; v7++) {
    v2["p" + v7] = v7;
}
new Int32Array(1);
new Uint32Array(8);
new WeakMap();
new Int32Array(6);
let v23 = Int16Array;
new v23(184);
const v27 = new Float64Array(65);
[v23] = v27;
const v35 = Symbol.iterator;
const o44 = {
    [v35]() {
        let v37 = 10;
        const o43 = {
            next() {
                v37--;
                const v41 = v37 == 0;
                const o42 = {
                    "done": v41,
                    "value": v37,
                    ...this,
                    ...Symbol,
                    ...this,
                    "b": -65537,
                    "h": 184,
                };
                return o42;
            },
        };
        return o43;
    },
};
