const v3 = [3,-2,-65536];
[536870888,-55998,1073741824,2147483649,4294967295,536870887,3,268435439];
let v5 = [-2147483649,11];
v5 = v3;
async function f13(a14, a15, a16) {
    const v18 = Symbol.iterator;
    const o27 = {
        [v18]() {
            let v20 = 10;
            const o26 = {
                next() {
                    v20--;
                    const v24 = v20 == 0;
                    const o25 = {
                        "done": v24,
                        "value": v20,
                    };
                    return o25;
                },
            };
            return o26;
        },
    };
    return await a16;
}
f13(v5, Symbol, v3);
