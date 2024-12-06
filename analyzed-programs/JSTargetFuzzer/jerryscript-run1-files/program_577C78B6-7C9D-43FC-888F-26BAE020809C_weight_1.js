const v5 = new Float32Array(8);
new Uint8Array(v5);
const v11 = new Float32Array(1000);
function f12(a13, a14, a15, a16) {
    const o25 = {
        ...a14,
        "a": 1073741823,
        ...v11,
        3: a16,
        set c(a18) {
            const v21 = !a16;
            Math.clz32(4294967295);
            !v21;
            try { v11.toLocaleString(a18, a14); } catch (e) {}
        },
        __proto__: v11,
        [v5]: a16,
    };
    return o25;
}
f12(8, f12, 5, 5);
f12(512, Float32Array, -2, -2);
f12(512, Float32Array, -2, 1000);
function f30(a31, a32) {
    try { a31(a31); } catch (e) {}
    const v34 = [-9223372036854775807,2,268435439,0,0,55990];
    const o35 = {
    };
    const v37 = new Proxy(v34, o35);
    v37 % 1000000000000.0;
    return f30;
}
f30(f30);
