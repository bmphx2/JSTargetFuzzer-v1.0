const v2 = new BigInt64Array(1024);
const v5 = new Int32Array(16);
const v8 = new Float64Array(129);
[-9007199254740992,512,-4,7,2147483648,-3,64,256];
const v10 = [65536,10000,536870887,473888917,1073741823,1];
let v11;
try { v11 = v8(16, v5, 129, Float64Array, v2); } catch (e) {}
function f12() {
    return v11;
}
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
    [v8]: Int32Array,
    ...Symbol,
    "c": v2,
    "b": Float64Array,
    4294967296: v10,
};
const v24 = [-47425,46481,12,26573,257,2147483649,1];
v8[Boolean] = f12;
v2.byteLength -= v11;
v10.h = -5.502408759604793;
v24 != 0.9485351130098739;
const o30 = {
    __proto__: v5,
    "a": v5,
    ...v8,
};
const v32 = new Boolean();
v32 >= Boolean;
