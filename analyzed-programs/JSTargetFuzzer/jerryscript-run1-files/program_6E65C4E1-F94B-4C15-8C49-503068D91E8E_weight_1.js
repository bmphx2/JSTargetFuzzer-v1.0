function f6(a7, a8) {
    const v10 = Symbol.toPrimitive;
    const o15 = {
        [v10]() {
            return 2147483649;
        },
    };
    const o24 = {
        "e": a7,
        "f": a8,
        ...a8,
        [-687995235]: 2147483649,
        "h": -687995235,
        __proto__: a7,
        get g() {
            for (let v17 = 0; v17 < 32; v17++) {
                Object.defineProperty(this, "d", { writable: true, configurable: true, get: Symbol });
                new Date();
                new Array(45546);
                this["p" + v17] = v17;
            }
            return 1n;
        },
        "g": a8,
        "d": -687995235,
        "a": a8,
        "b": Symbol,
        "c": Symbol,
        [a7]: -2147483649n,
    };
    return o24;
}
const v25 = f6(-687995235, -2147483649n);
const v26 = f6(2147483649, 45546);
const v27 = f6(-687995235, v25);
[1073741824,65535,-2,-5,-1256776117,62065,4,-4294967297];
[10,536870888,-2,3,-4096];
const v30 = [1024254417,-7,-1];
const v32 = [v27,[v27,v26,v30],-687995235];
[v30,f6,v32,v32];
([]).filter(eval);
