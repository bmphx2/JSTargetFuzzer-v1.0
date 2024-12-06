function f0() {
    const o17 = {
        p(a5) {
            const v7 = (10000).iterator;
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
            return a5;
        },
    };
    return "b";
}
f0();
f0();
f0();
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["n"](181, v36, v34); } catch (e) {}
new Uint16Array(v36);
for (let i49 = 0; i49 < 2; i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
