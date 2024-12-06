function f0() {
    const o4 = {
        "h": "isConcatSpreadable",
        "e": "isConcatSpreadable",
        "d": "isConcatSpreadable",
        "b": -42711,
        536870912: "isConcatSpreadable",
        ..."isConcatSpreadable",
        "g": "isConcatSpreadable",
        "a": -42711,
        [-42711]: -42711,
        "f": -42711,
        __proto__: "isConcatSpreadable",
        "c": -42711,
        4: 64,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
class C8 extends f0 {
    static [v5] = v5;
    h;
    a;
    static [v7] = v6;
    e = v7;
    #h;
    g = v7;
    constructor(a10, a11) {
        super();
        try { a10.getUint8(this, f0); } catch (e) {}
    }
}
const v16 = new C8(v7, v5);
const v17 = new C8(v16, v6);
const v18 = new C8(v5, C8);
function f19(a20, a21, a22, a23) {
    const o37 = {
        "g": v5,
        "h": C8,
        [C8](a25, a26) {
            try { a26["isView"](v16); } catch (e) {}
            v16[2765277996] = a26;
            a20 % f0;
            -1000.0 ^ 9223372036854775807;
            Math.asin(9223372036854775807);
            v16 / 10;
            return v6;
        },
    };
    return o37;
}
f19(v7, v18, v16, v17);
const v40 = f19(v7, f19(v16, v18, v5, v17), v7, v6);
[[v17]];
const v43 = [v18];
v5[v40];
for (let v45 = 0; v45 < 32; v45++) {
    C8["p" + v45] = v45;
}
let v48;
try { v48 = v43.flatMap(f19, v6); } catch (e) {}
v7[206] = v48;
new WeakMap();
