let v5 = 26580;
function f6(a7, a8) {
    const o11 = {
        "f": a7,
        ...a7,
        "e": -11n,
        set d(a10) {
            let v9 = this;
            [a8,v5,v9] = a10;
            v9.d = v5;
        },
        1: 268435439n,
        [a8]: -11n,
        ...a7,
    };
    return o11;
}
f6(3, 10000n);
f6(10000, 10000n);
f6(-11n, 268435439n);
Math.fround(Math) < 964329252n;
