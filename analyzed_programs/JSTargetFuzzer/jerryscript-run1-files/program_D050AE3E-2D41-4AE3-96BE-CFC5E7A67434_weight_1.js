let v0 = 9;
const v2 = new Float64Array(v0);
const v5 = new BigInt64Array(3059);
const v8 = new Int8Array(86);
function f9(a10, a11, a12) {
    const o21 = {
        "c": a11,
        [a11]: a10,
        ...v8,
        set f(a14) {
            let v15 = v5[a14];
            --v0;
            v15 -= a10;
            const v17 = new BigInt64Array(this, a12, a11);
            this & v5;
            try {
                super.keys(BigInt64Array, v15, a10, v17);
            } catch(e20) {
            }
        },
        "e": a12,
        [3059]: a10,
        "f": a12,
        "a": BigInt64Array,
        __proto__: v2,
        "h": v5,
        "g": Float64Array,
        "b": BigInt64Array,
        "d": f9,
        "g": 86,
    };
    return o21;
}
f9(v0, 3059, v0);
f9(3059, 3059, 86);
f9(86, 3059, v0);
const o26 = {
};
Reflect.has(o26);
