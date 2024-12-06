function f0() {
    const o19 = {
        ["4294967296"](a5, a6) {
            [-14];
            const v9 = Symbol.iterator;
            const o18 = {
                [v9]() {
                    let v11 = 10;
                    const o17 = {
                        next() {
                            const v15 = v11-- == 0;
                            const o16 = {
                                "done": v15,
                                "value": v11,
                            };
                            return o16;
                        },
                    };
                    return o17;
                },
            };
            return o18;
        },
    };
    return o19;
}
f0();
f0();
f0();
new Int32Array(4096);
new Int8Array(11);
new Float64Array(16);
const v37 = new Array(9);
const v40 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v50 = `
    Uint32Array >= Uint32Array;
    let v52;
    try { v52 = v40.join(v50); } catch (e) {}
    v37[v52];
`;
eval(v50);
