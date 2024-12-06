class C6 {
    static o(a8, a9) {
        const v11 = Symbol.iterator;
        const o20 = {
            [v11]() {
                let v13 = 10;
                const o19 = {
                    next() {
                        v13--;
                        const v17 = v13 == 0;
                        const o18 = {
                            "done": v17,
                            "value": v13,
                        };
                        return o18;
                    },
                };
                return o19;
            },
        };
        return -4294967296;
    }
}
new C6();
new C6();
const v23 = new C6();
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a30;
    this.f = v23;
    this.c = a30;
}
const v33 = new F27(-4294967296, C6, -868816.8301976611, -868816.8301976611);
new F27(4294967296, v33, 1.2118224630977933e+308, NaN);
new F27(536870912, v33, -868816.8301976611, 1.2118224630977933e+308);
const v36 = [9007199254740990,4294967297,4];
const o37 = {
    __proto__: v36,
};
o37.includes(o37);
