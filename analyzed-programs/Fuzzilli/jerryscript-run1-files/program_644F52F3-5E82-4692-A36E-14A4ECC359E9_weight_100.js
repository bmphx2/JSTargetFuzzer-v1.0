const v0 = [-1.3497550941044117e+308,-352441.08665581525,-386419.6700473721];
const v1 = [1000000000.0,NaN,-1.7176022955426192e+308,552323.5544603586,-1000000000000.0,388.13456947727923,0.5218516939731226,-32.116665668518294,2.0,1e-15];
const v2 = [-2.2250738585072014e-308,-1.4963836368932072e+308,394960.54481756804];
class C3 {
    [v2] = v1;
    static g;
    n(a5) {
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
        return this;
    }
}
const v17 = new C3();
const v18 = new C3();
new C3();
class C20 {
    constructor(a22, a23, a24) {
        new C3();
        this[v2] = v18["n"]("n", "n", v17);
        try { ("n")["repeat"](a22, ...C3, v0, v17); } catch (e) {}
    }
    static #o(a31, a32, a33, a34) {
        v0[this] = a33;
        v2 * a33;
        return a31;
    }
    static [C3] = v18;
}
const v36 = new C20(v18, v2, v17);
const v37 = new C20(v36, v0, v17);
new C20(v18, v36, v37);
let v44 = 0.13567793014821838;
const v45 = v44 >> v1;
const v46 = v45 + v45;
v44++ && v46;
