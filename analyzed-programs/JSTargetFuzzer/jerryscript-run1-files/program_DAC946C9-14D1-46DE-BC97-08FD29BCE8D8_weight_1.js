class C3 {
    set g(a5) {
        this.c;
        try { a5["UTC"](a5, this, -9223372036854775808, "UTC"); } catch (e) {}
    }
    static 239 = -9223372036854775808;
    set h(a10) {
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
    }
}
const v22 = new C3();
const v23 = new C3();
const v24 = new C3();
function F28(a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a32;
    this.b = v24;
    this.f = -1.5834539875814838e+308;
}
new F28(v24, -3070n, v24);
new F28(v24, -1407504766n, C3);
Math.expm1(Math);
new F28(v22, -3070n, v23);
Symbol().valueOf();
