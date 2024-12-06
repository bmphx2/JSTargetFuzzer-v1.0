function f0() {
}
function f1() {
    return f0;
}
const v2 = [6590,31588];
const v3 = [-3,512,0];
const v4 = [4096];
const v5 = [v3,f0,v2,f0,f0,v3,f0,f0];
[v5,v2,v5,v5];
[v3,v2];
const v10 = [-1.7976931348623157e+308];
-14 | v10;
v4[9];
const v18 = new Uint32Array(v10, v10);
const o23 = {
    valueOf() {
        return -14;
    },
};
new Uint8Array(v10);
v18.byteLength;
[-1318900379,65535];
[-45143,3,9007199254740992,7,-65536,268435456,3,5,2147483648,-58018];
const v33 = new Uint8Array(3803, 9007199254740992n, [-200991949,-9223372036854775808,-41334,1,268435441,9223372036854775807,734903921,2147483647]);
const v36 = new BigInt64Array(577);
new Uint16Array(128);
const v43 = new BigInt64Array(577, 3803, 128);
const v44 = v36[2];
let {"byteLength":v45,} = v33;
v45 |= 3803;
try { v44(v43); } catch (e) {}
const v48 = Symbol.iterator;
const o57 = {
    [v48]() {
        let v50 = 10;
        const o56 = {
            next() {
                v50--;
                const v54 = v50 == 0;
                const o55 = {
                    "done": v54,
                    "value": v50,
                };
                return o55;
            },
        };
        return o56;
    },
    "h": BigInt64Array,
    "c": 128,
    ...v48,
    ...v2,
    [v33]: 3803,
};
