function f2() {
    for (let v3 = 0; v3 < 32; v3++) {
        f2["p" + v3] = v3;
    }
    return undefined;
}
function f6(a7) {
    const o21 = {
        "g": a7,
        __proto__: a7,
        [undefined](a9) {
            const t11 = "e";
            t11[-2] = a7 | this;
            this.g = a7;
            [...a7] = "dotAll";
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a16;
                this.c = a7;
                this.a = "dotAll";
            }
            const v18 = new F14(F14, a7);
            new F14(v18, v18);
            new F14(f2, a7);
            return a9;
        },
        "h": a7,
        "e": undefined,
        "c": a7,
        ...a7,
        "a": a7,
    };
    return o21;
}
f6(f6(f2));
f6(true);
[-2.0,6.63522260569512,Infinity];
[-9.244701085871549e+307,383.90476554542784];
[0.8947798131885809,407.13599302299554,109997.77856499236,-484244.19372886553,465.94307871957903,2.220446049250313e-16,-2.220446049250313e-16,-Infinity,-8.91118139904414];
const v35 = new BigUint64Array(BigUint64Array);
const v37 = new BigInt64Array(v35);
v35.set(v37);
