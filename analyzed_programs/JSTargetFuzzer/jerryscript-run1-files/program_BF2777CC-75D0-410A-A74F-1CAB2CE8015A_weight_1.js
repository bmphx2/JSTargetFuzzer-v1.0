function f2() {
    for (let v3 = 0; v3 < 32; v3++) {
        f2["p" + v3] = v3;
    }
    return undefined;
}
function f6(a7) {
    const o26 = {
        "g": a7,
        __proto__: a7,
        [undefined](a9) {
            let v10 = "e";
            v10[-2] = a7 | this;
            this.matchAll = a7;
            [...a7] = "dotAll";
            let v14 = 10;
            for (; v14--, a7;) {
                v10 = v14;
            }
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = "dotAll";
                a9.c = a7;
                const o20 = {
                    "apply": f2,
                    "construct": f6,
                    "deleteProperty": f2,
                    "getOwnPropertyDescriptor": f6,
                    "preventExtensions": f2,
                };
                new Proxy(this, o20);
                this.a = "dotAll";
            }
            const v23 = new F16(F16, F16);
            new F16(v23, v23);
            const v25 = new F16(f2, a7);
            return v25;
        },
        "h": a7,
        "e": undefined,
        "c": a7,
        ...f6,
        "a": f6,
    };
    return o26;
}
f6(f6(f2));
f6(true);
[-2.0,6.63522260569512,Infinity];
[-9.244701085871549e+307,383.90476554542784];
[0.8947798131885809,407.13599302299554,109997.77856499236,-484244.19372886553,465.94307871957903,2.220446049250313e-16,-2.220446049250313e-16,-Infinity,-8.91118139904414];
const v40 = new BigUint64Array(BigUint64Array);
const v42 = new BigInt64Array(v40);
v40.set(v42);
