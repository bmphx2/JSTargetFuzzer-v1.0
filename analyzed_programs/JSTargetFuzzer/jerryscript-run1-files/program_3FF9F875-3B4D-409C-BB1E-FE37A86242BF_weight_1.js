const v0 = [-2.2250738585072014e-308,0.9285198319085027];
const v1 = [9.550024862131245,-1000000.0,-1.7976931348623157e+308,-3.2756799514164765,6.2157383324921724,1.9884462000020502,NaN,-254013.5682581393,-3.6443216639066183,-6.614747586527774e+307];
const v2 = [846278.2626734637,1000000.0,-1000.0,0.0,1000.0,0.5424494695357075];
new Map();
function f5() {
    return Map;
}
function f12(a13, a14, a15) {
    const o30 = {
        "e": a14,
        m(a17, a18) {
            const v20 = Symbol.iterator;
            const o29 = {
                [v20]() {
                    let v22 = 10;
                    const o28 = {
                        0: 1024,
                        "c": this,
                        ...a14,
                        "a": a13,
                        "b": a13,
                        next() {
                            v22--;
                            const v26 = v22 == v22;
                            const o27 = {
                                "done": v26,
                                "c": a18,
                            };
                            return o27;
                        },
                    };
                    return o28;
                },
            };
            return a13;
        },
    };
    return a14;
}
f12(v0, 1073741825n, v1);
const v32 = f12(v2, 35848n, v1);
f12(v32, 1062373090n, v2);
const v36 = new Int32Array(7);
new Float32Array(13);
new BigInt64Array(255);
new Int32Array(7, 13);
const o50 = {
    "a": v36,
    "d": Int32Array,
    "c": 4294967296n,
    "b": v32,
};
