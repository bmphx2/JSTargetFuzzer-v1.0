class C3 {
    n(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
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
                return o16;
            },
        };
        return this;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a25;
    this.h = a23;
}
const v27 = new F21(v20, v18, v18, v18);
const v28 = new F21(v19, v19, 0.0, C3);
new F21(v28, v28, v27, v20);
v27.g = v20;
const o30 = {
    __proto__: v28,
    ..."boolean",
    6: 0.0,
    1073741824: v19,
};
v27.g;
"-2147483649" / v27;
