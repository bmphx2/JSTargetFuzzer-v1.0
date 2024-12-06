function f3() {
    return "symbol";
}
const v4 = [1.4680566611571173,1000000.0,-1.0,2.2250738585072014e-308,-Infinity,-348819.07074022165,2.2250738585072014e-308,-1.6508954377280474e+307,-1.7976931348623157e+308,7.061180665830667e+307];
const v5 = [0.15651770348422522];
const v6 = [1.7976931348623157e+308,-1000000000000.0,464.95904168119637,2.220446049250313e-16,-1.0,-1.3163011729472346e+308];
function f7(a8, a9) {
    const o24 = {
        [a9]: v5,
        toString(a11, a12) {
            const v14 = Symbol.iterator;
            const o23 = {
                [v14]() {
                    let v16 = 10;
                    const o22 = {
                        next() {
                            v16--;
                            const v20 = v16 == 0;
                            const o21 = {
                                "h": a8,
                                ...v6,
                                [v4]: f7,
                                0: a9,
                                [v14]: Symbol,
                                "done": v20,
                                "value": v16,
                            };
                            return o21;
                        },
                    };
                    return o22;
                },
                "f": this,
                __proto__: v4,
                ..."iterator",
                "d": a12,
                "e": this,
            };
            return "iterator";
        },
    };
    return o24;
}
("symbol").length;
for (let v26 = 0; v26 < 32; v26++) {
    v6["p" + v26] = v26;
}
f7(f7, v5);
f7(v5, v6);
f7(f7, v5);
let v32 = 18209n;
-4294967295n | (v32 /= -2147483649n);
const v37 = new Date();
v37.setDate();
