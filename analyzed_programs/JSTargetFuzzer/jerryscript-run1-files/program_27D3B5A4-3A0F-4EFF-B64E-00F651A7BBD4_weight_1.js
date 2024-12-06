new Float64Array(7);
const v5 = new BigInt64Array(14);
const v8 = new BigUint64Array(854);
function f9(a10, a11, a12, a13) {
    const o25 = {
        "g": a13,
        "e": a10,
        "h": a12,
        p(a15, a16, a17) {
            const v22 = [this];
            Reflect.apply(v5.sort, v8, v22);
            return v8;
        },
    };
    return o25;
}
f9(7, 854, 854, 14);
f9(14, 854, 7, 854);
f9(7, 14, 14, 854);
const o30 = {
    "g": BigInt64Array,
};
ArrayBuffer.isView(o30.g);
