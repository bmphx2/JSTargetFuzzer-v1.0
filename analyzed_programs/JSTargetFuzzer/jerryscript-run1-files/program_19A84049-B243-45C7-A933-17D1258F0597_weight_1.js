function f3(a4) {
    const o5 = {
        [a4]: a4,
        "h": a4,
    };
    return o5;
}
f3(65537);
f3(127);
f3(127);
const v9 = [1000.0,-1.2158143088878635e+307,0.9716177440244738,3.0,-2.220446049250313e-16];
const v10 = [2.220446049250313e-16,514.7551389841647];
const v11 = [-2.2250738585072014e-308];
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 2147483647;
    this.b = a15;
}
const v18 = new F12(v9, 127, v10, v11);
const v19 = new F12(v10, 2147483647, v9, v11);
const v20 = new F12(65537, 65537, v9, v9);
function f21(a22, a23) {
    const o56 = {
        "g": 2147483647,
        1056: v19,
        "c": v20,
        "e": a23,
        "b": a23,
        ...v9,
        "d": 65537,
        [v11]: 127,
        9: 65537,
        set d(a25) {
            const v27 = Symbol.iterator;
            Object.defineProperty(v11, a25, { writable: true, set: f21 });
            a25 >>>= F12;
            for (let v28 = 0; v28 < 32; v28++) {
                let v29 = "p";
                const v30 = v29 + v28;
                v10[v30] = v28;
                const v31 = new f21(a22, v29 >>>= v30);
                v31.__proto__ = v19;
                let v33 = 548473760;
                const v36 = v33--;
                const v37 = 9 ** 9;
                const v38 = -761.9593668756372 >>> -761.9593668756372;
                -761.9593668756372 * v36;
                Math.pow(v33, 9);
                v33 >>> v37;
                Math.pow(-761.9593668756372, v38);
            }
            const o55 = {
                [v27]() {
                    let v44 = 10;
                    const o54 = {
                        next() {
                            v44--;
                            const v48 = v44 == 0;
                            const o49 = {
                                "a": v48,
                                "e": v48,
                                __proto__: this,
                                "f": v27,
                                ...this,
                                "done": v48,
                                "value": v44,
                            };
                            const v50 = [9,-11447];
                            const v52 = new BigUint64Array(BigUint64Array);
                            v52.set(v50);
                            return o49;
                        },
                    };
                    return o54;
                },
            };
        },
    };
    return o56;
}
f21(v19, v11);
f21(v18, v11, F12, f21(v20, v19), v10);
Object.defineProperty(([]).values(), "e", { writable: true, enumerable: true, value: 119 });
