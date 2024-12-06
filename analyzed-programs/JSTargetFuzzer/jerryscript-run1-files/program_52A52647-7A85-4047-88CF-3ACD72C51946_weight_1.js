const v5 = new Uint8Array(255);
try { v5(688, Uint8Array, 688, 688); } catch (e) {}
const v9 = Symbol.iterator;
const o18 = {
    [v9]() {
        let v11 = 10;
        const o17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                const o16 = {
                    "done": v15,
                    "value": v11,
                };
                return o16;
            },
        };
        return o17;
    },
};
const v20 = new Uint16Array(688);
try { v20.subarray(2597); } catch (e) {}
new Int32Array(2198);
new BigUint64Array(255);
new Uint16Array(128);
new Int32Array(2597);
const v35 = Array();
const v37 = [Array];
Reflect.apply(v35.forEach, Array, v37);
