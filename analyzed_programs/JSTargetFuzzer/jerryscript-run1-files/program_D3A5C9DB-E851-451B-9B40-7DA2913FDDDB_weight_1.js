const v0 = [];
function f4(a5) {
    const o35 = {
        1486227725: v0,
        "a": -2.0,
        [3.0]: a5,
        ...v0,
        "f": v0,
        __proto__: v0,
        get g() {
            let v7 = Symbol;
            try {
                super.toString(v7, v7, 3.0, this, this);
            } catch(e9) {
            }
            [,v7,a5] = a5;
            const v10 = a5.iterator;
            const o19 = {
                [v10]() {
                    let v12 = 10;
                    const o18 = {
                        next() {
                            v12--;
                            const v16 = a5 == 0;
                            const o17 = {
                                "done": v16,
                                "value": v12,
                            };
                            return o17;
                        },
                    };
                    return o18;
                },
            };
            4 << -2.0;
            a5[3.0] = 2;
            const o26 = {
                "apply": f4,
                "call": f4,
                "defineProperty": f4,
                "deleteProperty": f4,
                "getOwnPropertyDescriptor": f4,
                "getPrototypeOf": f4,
                "isExtensible": f4,
                "ownKeys": f4,
                "preventExtensions": f4,
                "set": f4,
                "setPrototypeOf": f4,
            };
            new Proxy(v0, o26);
            Math.random();
            Math.min(this);
            Math.min(4);
            Math.floor(~this);
            this && 4;
            return o19;
        },
    };
    return o35;
}
f4(0.0);
f4(0.0);
f4(3.0);
function f42() {
    return f42;
}
Symbol.iterator != f42;
