function f0() {
    const o7 = {
        __proto__: "toPrimitive",
        ..."toPrimitive",
        "c": -128,
        1: "toPrimitive",
        536870912: -1000000000.0,
        "g": -1000000000.0,
        "h": -1000000000.0,
        "replace": -128,
        "b": "toPrimitive",
        "matchAll": -128,
        o(a5) {
            const v6 = super.b;
            Object.defineProperty(this, 4294967295, { writable: true, configurable: true, get: f0 });
            return v6;
        },
    };
    return o7;
}
f0();
f0();
isNaN.apply(isNaN, isNaN);
f0();
"9007199254740992" || [-4294967296,8,-2147483648,-9007199254740992,-12326];
