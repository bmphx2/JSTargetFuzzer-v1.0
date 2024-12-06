function f3() {
    return 1;
}
const v8 = Symbol.iterator;
const o17 = {
    [v8]() {
        let v10 = 10;
        const o16 = {
            next() {
                v10--;
                const v14 = v10 == 0;
                const o15 = {
                    "done": v14,
                    "value": v10,
                };
                return o15;
            },
        };
        return o16;
    },
};
[9.715638118896935e+307,-294.55758990443996,7.248248333163513,1000000.0];
[1.6394848986034535e+308];
[0.40784550195939073,1.7976931348623157e+308,998.1762934619258];
const v29 = new BigInt64Array(64);
const v32 = new BigUint64Array(4096);
const v34 = new Float32Array();
try { v34(v34, 4096); } catch (e) {}
v29.indexOf(v34);
v32[8];
