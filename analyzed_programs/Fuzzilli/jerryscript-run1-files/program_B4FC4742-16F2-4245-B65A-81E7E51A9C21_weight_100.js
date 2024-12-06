function f0() {
}
const v3 = new Float32Array(4);
let v4 = 1662;
const v6 = new Uint8Array(v4);
const v9 = new Uint16Array(1888);
function f10(a11, a12, a13) {
    const o21 = {
        set g(a15) {
            v4 = a11;
            for (let v16 = 0; v16 < 4; v16++) {
                try { a15(a13, v16, v16); } catch (e) {}
            }
        },
        "g": 4,
        __proto__: v6,
        "d": a12,
        ...v3,
        [4]: a13,
        "b": v4,
    };
    return o21;
}
f10(1888, v4, 1888);
f10(v4, v4, 1888);
f10(v4, 4, v4);
const v32 = Uint16Array || 1e-15;
const v34 = (65535 >>> 1854687425) >> v32;
Math.acos(1e-15);
v34 | 1854687425;
v9.valueOf = f10;
