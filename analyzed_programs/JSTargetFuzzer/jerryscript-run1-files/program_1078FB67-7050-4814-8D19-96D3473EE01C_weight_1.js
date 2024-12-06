function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741823;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v5.a >>= v4;
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
const v17 = [-659762.9783543759,1.7677272441141245e+308,277552.0166604263,1000.0,3.6905561695119967e+307,0.41258408324564755];
[-0.0,821.7065291234901,-1000000000.0,2.220446049250313e-16,69451.09602253884,0.20083064504286252];
const v19 = [7.590858205218346,-628290.0158638824,-3.0,-0.0,508.88322756897105,0.5543476475073197,-4.0,1.0061018311831142e+308,-388353.900882412];
function f20(a21, a22, a23) {
    const o32 = {
        "c": a23,
        "e": a22,
        5: a21,
        m(a25, a26, a27, a28) {
            for (let v29 = 0; v29 < 32; v29++) {
                a22["p" + v29] = v29;
            }
            return a28;
        },
    };
    return o32;
}
const o33 = {
    __proto__: v17,
    "d": v19,
    "a": v3,
    "h": o16,
};
f20(v4, v5, v4);
f20(v4, v3, v5);
f20(v5, v3, v3);
new Int32Array(6);
let v41 = Int16Array;
new v41(184);
const v45 = new Float64Array(65);
[v41] = v45;
const v53 = Symbol.iterator;
const o62 = {
    [v53]() {
        let v55 = 10;
        const o61 = {
            next() {
                v55--;
                const v59 = v55 == 0;
                const o60 = {
                    "done": v59,
                    "value": v55,
                };
                return o60;
            },
        };
        return o61;
    },
};
