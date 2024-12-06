const v7 = Symbol.iterator;
const o16 = {
    [v7]() {
        let v9 = 10;
        const o15 = {
            ...this,
            "e": 62848066n,
            __proto__: this,
            ...v7,
            129: 662266699n,
            next() {
                v9--;
                const v13 = v9 == 0;
                const o14 = {
                    "done": v13,
                    "value": v9,
                };
                return o14;
            },
        };
        return o15;
    },
};
const v22 = [-5165n];
const v23 = Symbol.for;
Reflect.apply(v23, Symbol, v22);
const o25 = {
    "construct": Symbol,
    "defineProperty": Symbol,
    "deleteProperty": Symbol,
    "get": Symbol,
    "preventExtensions": Symbol,
};
new Proxy(v23, o25);
new Int32Array(RegExp.bind("2147483647", [-8,4294967295,148900462]));
