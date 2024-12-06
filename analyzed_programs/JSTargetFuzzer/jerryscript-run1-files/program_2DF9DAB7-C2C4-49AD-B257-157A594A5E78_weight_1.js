class C5 {
    static set d(a7) {
        -41084n in this;
        const o11 = {
            "preventExtensions": Symbol,
            "setPrototypeOf": Symbol,
        };
        new Proxy(this, o11);
        const v18 = Symbol.iterator;
        this[v18] = v18;
        const v20 = Symbol.iterator;
        const o35 = {
            [v20]() {
                let v22 = 10;
                const v24 = [4.0,2.0,-254497.14397592226,-380128.7104823978,NaN,-402041.8476713024,-2.2250738585072014e-308,-3.0,-Infinity];
                const v25 = [0.0,880023.6478053604,267.2145883342787,-2.2250738585072014e-308,-382626.49765567726,-5.0,7.306837224269849,1000000000000.0,1000000.0,-1.396531577825679e+308];
                Object.defineProperty(v24, Date, { enumerable: true, get: Date });
                v24.copyWithin(v25["entries"]());
                const o34 = {
                    next() {
                        v22--;
                        const v32 = v22 == 0;
                        const o33 = {
                            "done": v32,
                            "value": v22,
                        };
                        return o33;
                    },
                };
                return o34;
            },
        };
    }
    static set f(a37) {
        268435441n instanceof C5;
    }
    b;
}
new C5();
const v41 = new C5();
const v42 = new C5();
function f43(a44, a45, a46) {
    const o47 = {
        "b": 1073741825n,
        "c": C5,
        9: v41,
        "h": a44,
        "g": a44,
        "d": a44,
        "e": a46,
        "a": false,
        "f": a44,
        "g": C5,
        "a": C5,
        __proto__: v41,
        ...C5,
        [a44]: a46,
        ...v42,
        "d": -41084n,
    };
    return o47;
}
f43(C5, 268435441n, false);
f43(f43(false, 1073741825n, -41084n), 1073741825n, v42);
const v51 = [-894.1614607655206,492456.8169117365,-1e-15,1e-15,-617295.771918849,1.3943333321474277e+308,Infinity,4.0,1.0];
const v52 = [-1000.0,7.034592294388261e+307];
const v55 = new BigUint64Array(Array);
Object.defineProperty(v51, v55, { enumerable: true, value: v52 });
