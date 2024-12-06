new BigUint64Array(15);
new Uint16Array(1000);
const v14 = Symbol.iterator;
const o23 = {
    [v14]() {
        let v16 = 10;
        const o22 = {
            next() {
                v16--;
                const v20 = v16 == 0;
                const o21 = {
                    "done": v20,
                    "value": v16,
                };
                return o21;
            },
        };
        return o22;
    },
};
const v24 = new Int8Array(1000);
for (let v25 = 0; v25 < 5; v25++) {
    v24["subarray"](v25, v25);
}
new Uint8ClampedArray(53);
new WeakSet();
const v32 = new BigUint64Array();
try { v32.set(); } catch (e) {}
