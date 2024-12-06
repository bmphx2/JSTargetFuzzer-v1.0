const v2 = new Int8Array(3);
const v5 = new Float64Array(2);
new BigUint64Array(16);
function f9(a10, a11, a12) {
    const o17 = {
        ...v2,
        "c": a11,
        [BigUint64Array](a14, a15, a16) {
            v5.valueOf = a15;
            return a10;
        },
        "a": 2,
        "h": v2,
        __proto__: v5,
        "b": a12,
        ...v2,
        "f": Int8Array,
        [3]: Int8Array,
        ...v5,
        "d": a12,
    };
    return o17;
}
const v18 = f9(Int8Array, 2, 3);
f9(f9(Float64Array, 16, 3), 3, 3);
const v24 = [[268435441n]];
function f25(a26, a27, a28) {
    'use strict';
    return 2;
}
f25(v18, Float64Array, 16);
try { v24.lastIndexOf(-1.7976931348623157e+308, 268435441n); } catch (e) {}
