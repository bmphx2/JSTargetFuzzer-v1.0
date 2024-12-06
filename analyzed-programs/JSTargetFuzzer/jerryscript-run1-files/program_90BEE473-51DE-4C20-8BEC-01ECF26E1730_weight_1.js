function f0() {
}
function f1() {
    const o20 = {
        set b(a3) {
            this[8] = a3;
            this[4] = this;
            super.c;
            const v7 = Symbol.iterator;
            const o16 = {
                [v7]() {
                    let v9 = 10;
                    const o15 = {
                        next() {
                            v9--;
                            const v13 = v9 == 0;
                            const o14 = {
                                "done": v13,
                                "value": v9,
                            };
                            return o14;
                        },
                    };
                    return o15;
                },
            };
            [3.0,0.20033756290189964];
            [0.8087038983581954,-955395.5253450198,-490.59466124777674,251.73694141765736,0.13198731763450489];
            [-1.3959028232334483e+308];
        },
        __proto__: f0,
        [f0]: f0,
        "c": f0,
    };
    return o20;
}
f1();
f1();
Math.fround(f0);
const v27 = f0 || f0;
f0 & v27;
Math.abs(v27);
f1();
let v37 = -9007199254740991n;
v37 <<= -9223372036854775807n;
