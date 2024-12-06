class C1 {
    f = undefined;
    constructor() {
        this == this;
        const t3 = this !== undefined ? this : undefined;
        t3.d = undefined;
    }
    [undefined] = undefined;
    o() {
        const v10 = Math.atan(2.2250738585072014e-308);
        const v11 = this || -5216;
        Math.tan(-5216);
        Math.random();
        -2.2250738585072014e-308;
        ~-5216;
        v11 >>> this;
        return v10;
    }
}
new C1();
const v18 = new C1();
const v19 = new C1();
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a22;
    this.c = C1;
    this.e = v19;
}
new F20(v18);
new F20(v19);
new F20(v19);
const v33 = Symbol.iterator;
const o42 = {
    [v33]() {
        let v35 = 10;
        const o41 = {
            next() {
                v35--;
                const v39 = v35 == 0;
                const o40 = {
                    "done": v39,
                    "value": v35,
                };
                return o40;
            },
        };
        return o41;
    },
};
