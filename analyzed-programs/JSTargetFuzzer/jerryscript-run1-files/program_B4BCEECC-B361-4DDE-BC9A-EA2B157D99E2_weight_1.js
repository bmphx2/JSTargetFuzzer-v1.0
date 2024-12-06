class C5 {
    static set d(a7) {
        const v10 = Symbol.iterator;
        this[v10] = v10;
        const v12 = Symbol.iterator;
        const o27 = {
            [v12]() {
                let v14 = 10;
                const v16 = [4.0,2.0,-254497.14397592226,-380128.7104823978,NaN,-402041.8476713024,-2.2250738585072014e-308,-3.0,-Infinity];
                const v17 = [0.0,880023.6478053604,267.2145883342787,-2.2250738585072014e-308,-382626.49765567726,-5.0,7.306837224269849,1000000000000.0,1000000.0,-1.396531577825679e+308];
                Object.defineProperty(v16, Date, { enumerable: true, get: Date });
                v16.copyWithin(v17["entries"]());
                const o26 = {
                    next() {
                        v14--;
                        const v24 = v14 == 0;
                        const o25 = {
                            "done": v24,
                            "value": v14,
                        };
                        return o25;
                    },
                };
                return o26;
            },
        };
    }
}
new C5();
const v29 = new C5();
const v30 = new C5();
function f31(a32, a33, a34) {
    const o35 = {
        "b": 1073741825n,
        "c": C5,
        9: v29,
        "h": a32,
        "g": C5,
        "a": C5,
        __proto__: v29,
        ...C5,
        [a32]: a34,
        ...v30,
        "d": -41084n,
    };
    return o35;
}
f31(C5, 268435441n, false);
f31(f31(false, 1073741825n, -41084n), 1073741825n, v30);
const v39 = [-894.1614607655206,492456.8169117365,-1e-15,1e-15,-617295.771918849,1.3943333321474277e+308,Infinity,4.0,1.0];
const v40 = [-1000.0,7.034592294388261e+307];
const v43 = new BigUint64Array(Array);
Object.defineProperty(v39, v43, { enumerable: true, value: v40 });
