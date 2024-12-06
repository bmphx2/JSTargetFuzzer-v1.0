class C6 {
    valueOf(a8, a9) {
        this && a9;
        const v12 = Symbol.iterator;
        const o21 = {
            [v12]() {
                let v14 = 10;
                const o20 = {
                    next() {
                        v14--;
                        const v18 = v14 == 0;
                        const o19 = {
                            "done": v18,
                            "value": v14,
                        };
                        return o19;
                    },
                };
                return o20;
            },
        };
        return "a";
    }
}
new C6();
new C6();
new C6();
const v26 = Symbol.toPrimitive;
const o33 = {
    [v26]() {
        let [v28,...v29] = "number";
        let [] = "a";
        const o30 = {
            "get": Symbol,
            "getOwnPropertyDescriptor": Symbol,
            "getPrototypeOf": Symbol,
            "has": Symbol,
            "isExtensible": Symbol,
            "set": Symbol,
            "setPrototypeOf": Symbol,
        };
        new Proxy(this, o30);
        return 4.369048935927349;
    },
};
