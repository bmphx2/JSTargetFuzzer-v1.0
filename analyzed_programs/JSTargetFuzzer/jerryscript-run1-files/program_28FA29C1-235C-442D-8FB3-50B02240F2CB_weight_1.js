function f0() {
    const o17 = {
        n(a5) {
            const v7 = Symbol.iterator;
            const o16 = {
                [v7]() {
                    const o15 = {
                        next() {
                            -10;
                            const v13 = 10 == 1073741824;
                            const o14 = {
                                "done": v13,
                                "value": 10,
                            };
                            return o14;
                        },
                    };
                    return o15;
                },
            };
            return a5;
        },
    };
    return o17;
}
f0();
const v19 = [1.7976931348623157e+308];
const v20 = [-1000.0,-Infinity,-3.0];
function* f21(a22, a23) {
    yield* v19;
    return a23;
}
const v24 = f21(v19, v20);
v20["splice"](...[8,0,4294967297,-33048,6,1000,983207413], ...v24);
f0();
f0();
[268435440,128,9,-10402,536870912,268435439,5,536870912];
[10000,9007199254740990];
[-642205873,10,1387345827,-9007199254740990,1073741824,-9223372036854775807];
new Float32Array(16);
new BigInt64Array(219);
new Uint8Array(9);
6 * 9007199254740990;
