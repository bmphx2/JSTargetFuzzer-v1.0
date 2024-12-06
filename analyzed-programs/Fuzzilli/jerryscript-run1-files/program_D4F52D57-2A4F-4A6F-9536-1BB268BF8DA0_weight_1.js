function f0() {
    const o9 = {
        set f(a5) {
            for (let v6 = 0; v6 < 32; v6++) {
                const t4 = "-1742916382";
                t4["p" + v6] = v6;
            }
        },
        "a": 0.037766870261149665,
        __proto__: "d",
        "g": 0.037766870261149665,
        ["d"]: 0.037766870261149665,
        "f": "-1742916382",
    };
    return o9;
}
f0();
const v11 = f0();
f0();
const v20 = new Set();
function f21() {
    return -4294967296n;
}
for (const v22 in v20) {
    let v23;
    try { v23 = v11.valueOf(); } catch (e) {}
    const v24 = v20.size;
    const v25 = v11.f;
    v24 ^ v25;
    try { v23.o(v22, 4294967297, v25); } catch (e) {}
}
