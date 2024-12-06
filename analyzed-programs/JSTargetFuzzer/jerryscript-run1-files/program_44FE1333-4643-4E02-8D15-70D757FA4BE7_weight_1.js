const v5 = new Int16Array(5);
function f6(a7, a8) {
    const o9 = {
        "g": v5,
        1: a7,
        __proto__: v5,
    };
    return o9;
}
f6(10, 10);
f6(5, -5);
f6(-9223372036854775807, 5);
for (let v15 = 0; v15 < 32; v15++) {
    v5["p" + v15] = v15;
}
new Float64Array(9);
new Uint8ClampedArray(10);
const v26 = [-16,4];
try { v26.sort(45103); } catch (e) {}
