function f3(a4) {
    const o13 = {
        get b() {
            function f6(a7, a8) {
                const o9 = {
                    "f": a8,
                };
                return o9;
            }
            const v11 = f6(f6(a4, -38469), a4);
            f6(v11, a4, v11, f6);
            return a4;
        },
        ...a4,
        "f": a4,
    };
    return o13;
}
const v14 = f3(-14799);
const v15 = f3(-14799);
const v16 = f3(-2);
let v24 = undefined;
const o28 = {
    get g() {
        let v25 = this;
        ({"b":v25,"e":v25,"f":v25,} = v25);
        return -6260n;
    },
    "e": -38469,
    get c() {
        v24 = arguments;
        return this;
    },
};
const o29 = {
    ...o28,
    "b": v16,
    ...v14,
    "c": 268435456,
    [v15]: v24,
    ...v24,
};
for (const v30 of v24) {
    const v31 = v30.__proto__;
    try { v16.getUint8(v31, -14799, v31, v31); } catch (e) {}
}
o28.e;
Math.asinh(v24) | v24;
