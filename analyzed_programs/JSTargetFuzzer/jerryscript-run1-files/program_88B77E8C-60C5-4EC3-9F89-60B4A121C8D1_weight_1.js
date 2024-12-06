class C3 {
    static setUint8(a5, a6) {
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
        return a5;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = C3;
}
const v27 = new F21(2n, v18, 2n, v19, C3);
const v28 = new F21(268435439n, C3, 2n, v20);
new F21(3n, v28, 268435439n, v27);
for (; !10;) {
}
