const v3 = [1000.0,-1.2158143088878635e+307,0.9716177440244738,3.0,-2.220446049250313e-16];
const v4 = [2.220446049250313e-16,514.7551389841647];
const v5 = [-2.2250738585072014e-308];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 2147483647;
    this.b = a9;
}
const v12 = new F6(v3, 127, v4, v5);
const v13 = new F6(v4, 2147483647, v3, v5);
const v14 = new F6(65537, 65537, v3, v3);
function f15(a16, a17) {
    const o38 = {
        "g": 2147483647,
        1056: v13,
        "c": v14,
        "e": a17,
        "b": a17,
        ...v3,
        "d": 65537,
        [v5]: 127,
        9: 65537,
        set d(a19) {
            const v21 = Symbol.iterator;
            Object.defineProperty(v5, a19, { writable: true, set: f15 });
            a19 >>>= F6;
            for (let v22 = 0; v22 < 32; v22++) {
                v4["p" + v22] = v22;
            }
            const o37 = {
                [v21]() {
                    let v26 = 10;
                    const o36 = {
                        next() {
                            v26--;
                            const v30 = v26 == 0;
                            const o31 = {
                                "a": v30,
                                "e": v30,
                                __proto__: this,
                                "f": v21,
                                ...this,
                                "done": v30,
                                "value": v26,
                            };
                            const v32 = [9,-11447];
                            const v34 = new BigUint64Array(BigUint64Array);
                            v34.set(v32);
                            return o31;
                        },
                    };
                    return o36;
                },
            };
        },
    };
    return o38;
}
f15(v13, v5);
f15(v14, v13);
f15(v12, v5);
Object.defineProperty(([]).values(), "e", { writable: true, enumerable: true, value: 119 });
