class C3 {
    constructor(a5, a6) {
        a6 & 536870912;
    }
    g = C3;
    f = C3;
    [536870912];
    /*
    constructor(a9) {
        let v8 = this;
        try { a9(1000000.0, -4.0, v8, C3); } catch (e) {}
        [256,2,65018,34919,4294967295,2,536870912];
        [-707408415,9007199254740991];
        [256,62796,-35353,9007199254740992,4853,-8];
        Math.ceil(1000000.0);
        const v20 = ++v8;
        1.7067253479314352e+308 && v20;
        Math.ceil(v8);
        v20 - -4.0;
        Math.atan2(v8, 1.7067253479314352e+308);
    }
    */
}
const v25 = new C3(1000000.0);
const v26 = new C3(536870912);
const v27 = new C3(v26);
function f28(a29, a30) {
    const o47 = {
        "h": v26,
        "a": a29,
        7: a30,
        __proto__: C3,
        "f": a30,
        "c": v27,
        [v25](a32, a33) {
            try { v25.preventExtensions(a30, v26); } catch (e) {}
            return a30;
        },
        "g": a30,
        4096: C3,
        set e(a36) {
            [a30] = a30;
            try { a30(a29, 1000000.0, a36, a30); } catch (e) {}
            new Uint16Array(1);
            new Int16Array(3807);
            new BigInt64Array(2847);
        },
        274871310: -4.0,
    };
    return o47;
}
const v48 = f28(C3, v25);
f28(v48, v27);
const v50 = f28(C3, v25);
class C52 {
    get e() {
        v50[4] -= -2060149505;
        return this;
    }
    p(a58, a59, a60) {
        Object.defineProperty(a58, v26, { writable: true, set: f28 });
        a60[-4.0] = v25;
        v50[5] = v48;
        return v27;
    }
}
const v61 = new C52();
new C52();
new C52();
function F73(a75, a76, a77, a78) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a78;
    this.f = -4294967296;
}
new F73(-4294967296, 5n, "global", "toString");
new F73(-4294967296, -7n, "toString", "global");
const v81 = new F73(-4294967296, 5n, "global", "global");
if ("function" == v81) {
} else {
    function F86(a88, a89, a90) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a90;
    }
    const v91 = new F86(F86, "global", "function");
    new F86(v91, "global", "function", v91, v61, F86);
    new F86(v91, "global", "function");
}
