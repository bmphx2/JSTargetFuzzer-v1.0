function f9(a10, a11) {
    const o23 = {
        [a11]: 16,
        "h": 63541,
        2252697517: 17.077911458390304,
        "f": a10,
        "d": 1.0705227169594913,
        set g(a13) {
            a13 = -21275;
            new Float64Array(0);
            new BigUint64Array(64);
            new Uint8Array(3286);
        },
    };
    return o23;
}
f9(63541, 1.0705227169594913);
f9(-21275, 1.0705227169594913);
f9(1912132003, 2.2250738585072014e-308);
const v27 = f9(16, 17.077911458390304);
v27 % v27;
16 ** 1912132003;
const v31 = Symbol.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
