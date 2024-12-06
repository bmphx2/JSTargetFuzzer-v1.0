function f3(a4, a5) {
    const o20 = {
        "unicode": -1000000.0,
        [a4]: -1000000.0,
        __proto__: a4,
        "f": a4,
        6: -3.845842595068119e+307,
        get g() {
            for (let v7 = 0; v7 < 32; v7++) {
                const v9 = "p" + v7;
                const v11 = Symbol.toPrimitive;
                const o16 = {
                    [v11]() {
                        for (let v13 = 0; v13 < 32; v13++) {
                            v11["p" + v13] = v13;
                        }
                        return v7;
                    },
                };
                this[v9] = v7;
                const o17 = {
                    "get": Symbol,
                    "getOwnPropertyDescriptor": Symbol,
                    "getPrototypeOf": f3,
                };
                new Proxy("p", o17);
            }
            return -1000000.0;
        },
        /*
        __proto__: a4,
        */
        "d": 372.2424611265558,
    };
    return o20;
}
f3(372.2424611265558, -1000000.0);
f3(372.2424611265558, -1000000.0, 372.2424611265558, f3(-3.845842595068119e+307, -3.845842595068119e+307), f3);
const v29 = new BigUint64Array(3);
3 in v29;
