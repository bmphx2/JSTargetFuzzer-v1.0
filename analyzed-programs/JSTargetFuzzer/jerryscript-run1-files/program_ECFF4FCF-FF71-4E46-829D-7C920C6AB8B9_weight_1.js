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
                return 4294967296;
            },
        };
        return -4294967296;
    }
}
new C6();
typeof 767050160n;
new C6();
const v25 = new C6();
function F29(a31, a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a32;
    this.f = v25;
    this.c = a32;
}
const v35 = new F29(-4294967296, C6, -868816.8301976611, -868816.8301976611);
new F29(4294967296, v35, 1.2118224630977933e+308, NaN);
new F29(536870912, v35, -868816.8301976611, 1.2118224630977933e+308);
const v38 = [9007199254740990,4294967297,4];
const o39 = {
    __proto__: v38,
};
o39.includes(o39);
