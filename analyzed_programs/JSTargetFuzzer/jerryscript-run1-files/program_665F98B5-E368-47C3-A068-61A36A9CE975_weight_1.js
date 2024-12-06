const v2 = new Int32Array(166);
let v3 = 2507;
new Uint16Array(v3);
const v8 = new Uint16Array(2023);
function f9(a10, a11, a12) {
    const o22 = {
        "h": Uint16Array,
        ...v2,
        p(a14, a15, a16, a17) {
            const o18 = {
            };
            const v20 = new Proxy(v2, o18);
            return v20.d;
        },
        [v2]: a11,
        "d": 166,
        0: Int32Array,
    };
    return o22;
}
const v23 = f9(v3, 2023, 166);
const v24 = f9(166, v3, v3);
const v25 = f9(v3, 2023, 166);
v23[v8] &= 2023 / f9(166, 166, 2023);
Object.defineProperty(v25, "a", { configurable: true, enumerable: true, set: f9 });
for (const v28 in v24) {
    new Int32Array(v2, v3, 2023);
    v3 || v28;
    v3 |= 2023;
    delete v2[v28];
}
