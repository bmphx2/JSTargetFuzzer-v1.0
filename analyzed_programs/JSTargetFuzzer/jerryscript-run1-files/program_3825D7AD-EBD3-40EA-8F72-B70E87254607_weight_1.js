class C3 {
    valueOf(a5, a6) {
        const v8 = Symbol.iterator;
        const o29 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                Object.defineProperty(v8, 9, { set: Symbol });
                try { o16["next"](a6, v10, -2.2250738585072014e-308, o16, a5, ...803102249n); } catch (e) {}
                new Date(34405, BigUint64Array);
                ("function").replaceAll("o");
                return o16;
            },
        };
        return -9007199254740990n;
    }
}
const v30 = new C3();
const v31 = new C3();
const v32 = new C3();
function f33() {
    return C3;
}
function f34(a35, a36, a37, a38) {
    const o42 = {
        set g(a40) {
        },
        get g() {
            return this;
        },
    };
    const o50 = {
        __proto__: v30,
        "a": a36,
        [a38](a44, a45, a46, a47) {
            a35 != v32;
            return a46;
        },
        7: v31,
        [C3]: f33,
        "h": a36,
    };
    return o50;
}
f34(803102249n, 803102249n, v32, v30);
f34(4294967296n, 4294967296n, v30, C3);
f34(803102249n, 4294967296n, v30, v30);
typeof -7528 === -4294967295;
