function f6(a7, a8, a9) {
    const o14 = {
        m(a11, a12, a13) {
            return a12;
        },
    };
    const v15 = o14.m;
    const o16 = {
        ...v15,
    };
    const o17 = {
        __proto__: a8,
        [-1]: 2147483647,
        "h": a7,
        "e": f6,
        "d": 2147483647,
        "b": 2147483647,
        ...a9,
        ...o16,
        5: a8,
        1: 10000,
        "e": 6,
        "g": -4091,
        "b": -1,
        "c": 10000,
        "f": a7,
        ...a8,
        [a8]: a7,
        "d": 10000,
    };
    return o17;
}
f6(6, f6(10000, 6, 1386321668), -1);
f6(6, f6, 2147483647);
f6(2147483647, -4091, 10000);
const v26 = Symbol.iterator;
const o35 = {
    [v26]() {
        let v28 = 10;
        const o34 = {
            next() {
                v28--;
                v28 == 0;
                const o33 = {
                    "done": this,
                    "value": v28,
                };
                return -1;
            },
        };
        return o34;
    },
};
(["OsvPg"])["flat"]("flat");
