[-65535,-268435456,13,128,9];
[-2147483647,13,[9,-65535,13800,-268435456]];
const v15 = [5.0];
function f17(a18, a19, a20) {
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
    return a19;
}
f17(128, -9223372036854775808, -2147483647);
new Set(v15);
new Int16Array(4096);
