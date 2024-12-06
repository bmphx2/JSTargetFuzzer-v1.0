function f0() {
    const o17 = {
        268: -5.596000902021571e+307,
        "e": "4096",
        [10]: -5.596000902021571e+307,
        __proto__: "4096",
        [10](a5) {
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
            return "4096";
        },
    };
    return o17;
}
f0();
const v19 = f0();
f0();
const v27 = [-1107327469n,v19,f0,"size"];
const v28 = [f0,-1107327469n,"size"];
[v28];
typeof v27 === "undefined";
try { v28["flat"](..."size", -55327n, ..."fromCharCode", ...812852026); } catch (e) {}
const o40 = {
    "maxByteLength": 225,
};
const v42 = new ArrayBuffer(97, o40);
new Int8Array(v42);
