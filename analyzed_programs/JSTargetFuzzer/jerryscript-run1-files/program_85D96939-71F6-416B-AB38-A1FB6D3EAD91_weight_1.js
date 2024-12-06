new Uint32Array(248);
new BigUint64Array(197);
new Uint16Array(127);
new BigUint64Array(1447);
new Uint8ClampedArray(4);
new BigInt64Array(128);
function f18(a19, a20) {
    const v22 = Symbol.iterator;
    const o31 = {
        [v22]() {
            let v24 = 10;
            const o30 = {
                next() {
                    v24--;
                    const v28 = v24 == 0;
                    const o29 = {
                        "done": v28,
                        "value": v24,
                    };
                    return o29;
                },
            };
            return o30;
        },
    };
    return o31;
}
f18(1447, 1447);
