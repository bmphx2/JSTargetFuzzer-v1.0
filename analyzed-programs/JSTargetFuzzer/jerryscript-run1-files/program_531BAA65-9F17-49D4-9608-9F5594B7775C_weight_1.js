const v6 = [-38831,10,46271,-2147483649];
const v7 = [-36179,128,536870887,762112148,1024];
const v8 = [-4];
function f9(a10, a11, a12, a13) {
    const o37 = {
        valueOf(a15, a16, a17, a18) {
            const t6 = 1073741823;
            t6.length = 1;
            a18 = a17;
            try {
                super.deref();
            } catch(e21) {
            }
            return this;
        },
        "a": a10,
        [a13]: 47486,
        __proto__: -63667,
        [a10](a23, a24, a25) {
            Object.defineProperty(this, 1905407196, { configurable: true, value: a25 });
            v6.__proto__ = v6;
            const v27 = Symbol.iterator;
            const o36 = {
                [v27]() {
                    let v29 = 10;
                    const o35 = {
                        next() {
                            v29--;
                            const v33 = v29 == 0;
                            const o34 = {
                                "done": v33,
                                "value": v29,
                            };
                            return o34;
                        },
                    };
                    return o35;
                },
            };
            return a12;
        },
        "b": v6,
        "d": 47486,
        "c": a11,
    };
    return o37;
}
f9(f9, v8, 536870888n, -63667);
f9(v7, v8, 4294967295n, 47486);
f9(1073741823, v7, 4294967295n, -63667);
function* f41(a42, a43, a44) {
    return yield -1000.0;
}
new Float32Array(f41());
