const v0 = [10000,105338366,1,12,-65537,-16,268435456,1721636561,15,-9223372036854775808];
const v1 = [60248,998268496];
const v2 = [52730,536870888,-13,818146550,-36305,64,257];
function f3(a4, a5) {
    let v9 = 4096;
    v9 = a5;
    const o21 = {
        "d": v1,
        __proto__: v0,
        /*
        __proto__: a4,
        */
        n(a11) {
            return "isConcatSpreadable";
        },
        [v0]: v2,
        o(a16, a17) {
            let [v18] = a17;
            v2["at"](v18);
            return a4;
        },
    };
    return o21;
}
const v22 = f3(v0, v1);
const v23 = f3(v1, v2);
const v24 = f3(v2, v0);
[[[false,false,v24,-2.220446049250313e-16,1.7282896104127196e+308]],v22,v24,v2];
new Number(1);
delete Number[SyntaxError];
new Number(1 | v23);
