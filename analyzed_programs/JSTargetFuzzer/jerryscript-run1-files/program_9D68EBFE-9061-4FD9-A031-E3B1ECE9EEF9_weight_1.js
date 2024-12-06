const v7 = new EvalError(EvalError);
function f8(a9, a10, a11) {
    const o15 = {
        ...a11,
        ...13,
        m(a13, a14) {
            a13[5] = 1073741824;
            a13.__proto__ = a13;
            return a9;
        },
        "e": a11,
        2147483649: -65536,
        __proto__: v7,
    };
    return o15;
}
const v16 = f8(2147483649, 2147483649, -65536);
f8(2147483649, -65536, v16);
f8(1073741824, 13, v16);
const v20 = new Date();
v20.setDate();
