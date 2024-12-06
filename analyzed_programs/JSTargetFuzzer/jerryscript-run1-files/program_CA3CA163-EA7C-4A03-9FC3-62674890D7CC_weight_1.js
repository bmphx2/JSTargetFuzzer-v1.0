class C3 {
    static o(a5) {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == 0;
                        const o14 = {
                            "done": v13,
                            "value": 0,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
        return o16;
    }
}
const v17 = new C3();
const v18 = new C3();
const v19 = new C3();
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = C3;
    this.c = 5;
}
const v25 = new F20(13, v19, C3);
new F20(5, v18, v17);
new F20(9007199254740992, 13, v25);
/[a-b-c]*/yim;
/(x)(x)(x)\3*/g;
/abc+?/gisu;
/(x)(x)(x)\4+/gym;
