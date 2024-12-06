function f0() {
    const o26 = {
        ..."symbol",
        o(a5, a6) {
            const t4 = "symbol";
            t4.length = 0;
            const o10 = {
                "maxByteLength": 1792,
            };
            const v12 = new ArrayBuffer(1792, o10);
            new Float32Array(v12);
            const v16 = Symbol.iterator;
            const o25 = {
                [v16]() {
                    let v18 = 10;
                    const o24 = {
                        next() {
                            v18--;
                            const v22 = v18 == 0;
                            const o23 = {
                                "done": v22,
                                "value": v18,
                            };
                            return o23;
                        },
                    };
                    return o24;
                },
            };
            return o25;
        },
    };
    return o26;
}
const v27 = f0();
const v28 = f0();
const v29 = f0();
const v30 = [v29,v29,v29,v29,v29];
[v29,f0,v28,v27,v30];
[v30,f0,v29,v27];
const o43 = {
    toString(a37, a38, a39, a40) {
        return SyntaxError();
    },
};
async function f44(a45, a46) {
    return 1073741823 >>> o43;
}
f44(f44, f44);
