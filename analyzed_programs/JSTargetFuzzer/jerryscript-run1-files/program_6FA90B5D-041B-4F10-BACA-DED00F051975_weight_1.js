function f0() {
    const o6 = {
        6: 129,
        "d": 129,
        "e": 129,
        get h() {
            return (129).e;
        },
        "a": 112466027,
        ...14,
        "f": 14,
    };
    return o6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
function f13(a14, a15) {
    const o32 = {
        "a": v9,
        [f0](a17, a18, a19, a20) {
            const o21 = {
                "apply": f13,
                "call": a20,
                "construct": 536870912,
                "defineProperty": 4096,
                "deleteProperty": v8,
                "b": f0,
                "getOwnPropertyDescriptor": f0,
                "getPrototypeOf": f13,
                "MIN_VALUE": f0,
                "isExtensible": f0,
                "ownKeys": f0,
                "preventExtensions": a19,
                "setPrototypeOf": 4096,
            };
            new Proxy(v9, o21);
            v7[a17] = a14;
            a18 = 4294967295;
            a18[10000] = a14;
            a18[Symbol.toPrimitive] = a19;
            return v7;
        },
        toString(a27, a28, a29) {
            const v30 = f13(this, a29, 536870912, a15, 536870912, 536870912);
            try { new v30(this, a27, v7, v30); } catch (e) {}
            return a15;
        },
    };
    return o32;
}
f13(v9, 536870912);
f13(f13(v9, 4096), 536870912);
const o46 = {
    set e(a37) {
        const v42 = 4096 * !-4294967296;
        2147483649 % -4294967296;
        v42 * v42;
        /a\S/gisum;
    },
};
