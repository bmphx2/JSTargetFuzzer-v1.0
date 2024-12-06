function f6(a7, a8) {
    const o26 = {
        __proto__: a7,
        5: 2,
        3: 2,
        get f() {
            const v11 = Symbol.iterator;
            const o25 = {
                [v11]() {
                    let v13 = 10;
                    const o24 = {
                        next() {
                            v13--;
                            for (let v17 = 0; v17 < 32; v17++) {
                                Object["p" + v17] = v17;
                            }
                            Object.keys(Object);
                            const v22 = v13 == 0;
                            const o23 = {
                                "done": v22,
                                "value": v13,
                            };
                            return this;
                        },
                    };
                    return o24;
                },
            };
            return 1000000.0;
        },
    };
    return o26;
}
f6(2, 1073741823);
f6(1073741823, 1073741823);
f6(2, 2);
const v34 = new BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array);
v34.buffer.byteLength;
