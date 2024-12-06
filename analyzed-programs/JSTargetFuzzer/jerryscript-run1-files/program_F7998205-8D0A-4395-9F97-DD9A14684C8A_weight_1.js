new Int8Array(7);
const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
const v19 = new BigUint64Array(14);
typeof v19 === "number";
const v29 = new Uint8Array();
try { v29.filter(v29, v29); } catch (e) {}
new BigUint64Array(128);
const v34 = new Uint16Array(16);
v34[5] = v34;
