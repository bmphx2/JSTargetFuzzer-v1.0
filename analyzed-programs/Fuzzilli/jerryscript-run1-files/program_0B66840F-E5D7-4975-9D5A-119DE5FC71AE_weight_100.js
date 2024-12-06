function f6(a7, a8, a9, a10) {
    const o25 = {
        toString(a12, a13) {
            return a10;
        },
        __proto__: a7,
        "h": 9657,
        [9657](a18, a19, a20, a21) {
            let v22;
            try { v22 = a21(231398910, a10, a10, a21); } catch (e) {}
            try {
                super.p(a9, a20, -32144, v22);
            } catch(e24) {
            }
            return -32144;
        },
    };
    return o25;
}
const v26 = f6(231398910, 14, 9657, -1018745939);
f6(9657, -1018745939, 231398910, 9657);
f6(14, 14, -536870912, 231398910);
new Uint8Array(2);
new Float64Array(1);
new Uint32Array(214);
const o38 = {
    "apply": f6,
    "call": f6,
    "construct": f6,
    "defineProperty": f6,
    "getPrototypeOf": f6,
    "preventExtensions": f6,
};
new Proxy(v26, o38);
