const v0 = [];
function f1() {
    return v0;
}
function f2(a3, a4) {
    const o21 = {
        m(a6) {
            a3.f &= a3;
            a6.f ^= a6;
            return this;
        },
        [v0]: a3,
        valueOf(a8, a9) {
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
                    return o19;
                },
            };
            return o20;
        },
    };
    return o21;
}
const v22 = f2(f2, f2);
const v23 = f2(v0, v22);
const v24 = f2(v22, v22);
function f25() {
    return v24;
}
function f26() {
    return v22;
}
let {"f":v28,"length":v29,...v30} = v0;
v0[Set] = v0;
const v32 = Symbol.iterator;
const o41 = {
    [v32]() {
        let v34 = 10;
        const o40 = {
            next() {
                v34--;
                const v38 = v34 == 0;
                const o39 = {
                    "done": v38,
                    "value": v34,
                };
                return o39;
            },
        };
        return o40;
    },
};
const v42 = new Set();
[f1,v0,v42,f1];
[v22,f1,v22,v23,f1];
[f1,f2];
const v48 = new BigInt64Array(512);
const v51 = new Float64Array(16);
new Int8Array(15);
[-42.099802252501604,v22,Set];
const v60 = [BigInt64Array,BigInt64Array];
[v60,v60,-42.099802252501604];
v51.buffer /= 16;
for (const v68 of v48) {
    new Float64Array(5);
    new Float64Array(2);
    new Float32Array(2983);
}
