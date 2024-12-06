[];
let v1 = WeakSet;
const v2 = new v1();
class C6 {
    #h;
    b;
    static #f;
    static 0;
    constructor(a8, a9, a10, a11) {
        const v13 = Symbol.iterator;
        const o22 = {
            [v13]() {
                let v15 = 10;
                const o21 = {
                    next() {
                        v15--;
                        const v19 = v15 == 0;
                        const o20 = {
                            "done": v19,
                            "value": v15,
                        };
                        return o20;
                    },
                };
                return o21;
            },
        };
    }
}
new C6(-9223372036854775808, -9223372036854775808, -2147483648, -9223372036854775808);
const v24 = new C6(-2147483648, -2147483648, -4096, -4096);
new C6(-9223372036854775808, -4096, -4096, -9223372036854775808);
v2.g ^= -9223372036854775808;
let v27;
try {
const t0 = -2147483648;
v27 = t0();
} catch (e) {}
let v28 = 0;
do {
    v1 = v27;
    v24 + Uint32Array;
    v28++;
} while (v28 < 0)
