function f3(a4, a5) {
    const o12 = {
        3: a4,
        "f": a5,
        __proto__: a5,
        "h": 2147483648n,
        "a": a5,
        "c": a4,
        o(a7) {
            268435456n || -9;
            return a5;
        },
    };
    return o12;
}
const v13 = f3(-1n, 268435456n);
f3(-1n, 268435456n);
f3(-1n, v13);
let v16 = 1;
new Uint32Array(v16);
new BigInt64Array(64);
new Int16Array(66);
v16 += 64;
f3(268435456n, v13);
const v29 = async (a30, a31) => {
    for (let v32 = 0; v32 < 32; v32++) {
        a30["p" + v32] = v32;
    }
    return await a31;
};
