new Date();
new Uint8ClampedArray(0);
new Int8Array(16);
new Float64Array(145);
function f11(a12, a13, a14) {
    const o29 = {
        [a13]: a14,
        ...a14,
        [Float64Array]: Uint8ClampedArray,
        "f": 145,
        set h(a16) {
            const v19 = Symbol.iterator;
            const o28 = {
                [v19]() {
                    let v21 = 10;
                    const o27 = {
                        next() {
                            v21--;
                            const v25 = v21 == 0;
                            const o26 = {
                                "done": v25,
                                "value": v21,
                            };
                            return o26;
                        },
                    };
                    return o27;
                },
            };
        },
    };
    return o29;
}
const v32 = ([-2.0,8.942667862857025,5.0])["fill"](..."fill");
let v33 = undefined;
Math.asinh(v33 = v32) ^ v33;
f11(145, 16, Uint8ClampedArray);
f11(145, 16, Int8Array);
f11(0, 0, Float64Array);
try {
    for (const v41 of "preventExtensions") {
        break;
    }
} finally {
}
