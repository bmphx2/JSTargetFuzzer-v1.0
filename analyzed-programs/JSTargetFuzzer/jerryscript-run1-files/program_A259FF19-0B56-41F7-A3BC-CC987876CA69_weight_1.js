new Int32Array(5);
new Float64Array(255);
const v11 = new Uint32Array(2400);
function f16(a17, a18, a19, a20) {
    const o21 = {
        "a": 5,
        __proto__: a17,
        [5]: a20,
        ...v11,
        "b": 3,
    };
    return o21;
}
f16(f16(255, -4096, 255, 255), 5, 3, 579034476);
f16(3, 3, 910527156, 5);
