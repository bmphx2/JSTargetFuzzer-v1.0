const v6 = new Float64Array(65);
const v8 = v6["toLocaleString"]();
function f11(a12, a13) {
    const o37 = {
        __proto__: a12,
        5: 2,
        3: 2,
        get f() {
            const v16 = Symbol.iterator;
            const o36 = {
                [v16]() {
                    let v18 = 10;
                    const o35 = {
                        next() {
                            function f20(a21, a22, a23, a24) {
                                const o25 = {
                                };
                                return o25;
                            }
                            v18--;
                            for (let v28 = 0; v28 < 32; v28++) {
                                Object["p" + v28] = v28;
                            }
                            Object.keys(Object);
                            const v33 = v18 == 0;
                            const o34 = {
                                "done": v33,
                                "value": v18,
                            };
                            return this;
                        },
                    };
                    return o35;
                },
            };
            return 1000000.0;
        },
    };
    return o37;
}
f11(2, 1073741823);
f11(1073741823, 1073741823);
f11(2, 2);
function f43() {
    Object.defineProperty(v8, "d", { value: 1e-15 });
    return 1e-15;
}
const v47 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v47.buffer.byteLength;
