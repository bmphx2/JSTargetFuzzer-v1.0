function f0() {
}
function f1() {
    return f0;
}
const v2 = [6590,31588];
const v3 = [-3,512,0];
[4096];
const v5 = [v3,f0,v2,f0,f0,v3,f0,f0];
[v5,v2,v5,v5];
[v3,v2];
const v10 = [-1.7976931348623157e+308];
const v13 = new Uint32Array(v10, v10);
new Uint8Array(v10);
v13.byteLength;
[-1318900379,65535];
[-45143,3,9007199254740992,7,-65536,268435456,3,5,2147483648,-58018];
const v23 = new Uint8Array(3803, 9007199254740992n, [-200991949,-9223372036854775808,-41334,1,268435441,9223372036854775807,734903921,2147483647]);
const v26 = new BigInt64Array(577);
new Uint16Array(128);
const v33 = new BigInt64Array(577, 3803, 128);
const v34 = v26[2];
let {"byteLength":v35,} = v23;
v35 |= 3803;
try { v34(v33); } catch (e) {}
const v38 = Symbol.iterator;
const o47 = {
    [v38]() {
        let v40 = 10;
        const o46 = {
            next() {
                v40--;
                const v44 = v40 == 0;
                const o45 = {
                    "done": v44,
                    "value": v40,
                };
                return o45;
            },
        };
        return o46;
    },
    "h": BigInt64Array,
    "c": 128,
    ...v38,
    ...v2,
    [v23]: 3803,
};
