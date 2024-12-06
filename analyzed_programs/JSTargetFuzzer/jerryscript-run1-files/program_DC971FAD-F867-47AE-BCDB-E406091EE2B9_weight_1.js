const v2 = new Uint32Array(6);
new Float32Array(4095);
const v8 = new Uint8ClampedArray(3176);
function f9(a10, a11, a12, a13) {
    const o22 = {
        "d": a11,
        __proto__: v8,
        "c": Uint8ClampedArray,
        o(a15, a16) {
            6 / a10;
            +Uint8ClampedArray;
            return v8;
        },
        2: v8,
    };
    const v25 = Symbol.iterator;
    const o34 = {
        [v25]() {
            let v27 = 10;
            const o33 = {
                next() {
                    v27--;
                    const v31 = v27 == 0;
                    const o32 = {
                        "done": v31,
                        "value": v27,
                    };
                    return o32;
                },
            };
            return o33;
        },
    };
    return o22;
}
f9(3176, 4095, 3176, v2);
f9(4095, 3176, 3176, 4095);
f9(6, 4095, 6, Float32Array);
const v39 = [992.8042074437715,-53.22282882889647,-6.46888722357242,1000000.0,-9.792725739616209e+307,-2.0,0.6799536982439116,-605166.430039607];
try {
    new Uint32Array(4087n, 1071, ...v39);
} catch(e43) {
} finally {
}
