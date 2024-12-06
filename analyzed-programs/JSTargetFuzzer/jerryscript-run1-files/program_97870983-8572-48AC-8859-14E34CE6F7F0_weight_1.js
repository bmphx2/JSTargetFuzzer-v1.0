function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 16422;
    this.f = -62013;
    this.h = a5;
}
new F3(536870887, 16422);
const v8 = new F3(-62013, -62013);
const v9 = new F3(536870887, 16422);
function f13(a14, a15, a16) {
    const o34 = {
        "g": -4096n,
        "a": a14,
        set f(a18) {
            const v20 = Symbol.isConcatSpreadable;
            function f22(a23, a24, a25, a26) {
                const o29 = {
                    set g(a28) {
                    },
                    ...a18,
                };
                return o29;
            }
            f22(2, f22());
            v20[v20];
            super.c = -4096n;
            v20[5] = this;
        },
        "d": 16422,
    };
    return o34;
}
f13(v9, 16422, -4096n);
f13(v8, 536870887, f13(v9, -62013, -62013));
/[\c1]?/m;
