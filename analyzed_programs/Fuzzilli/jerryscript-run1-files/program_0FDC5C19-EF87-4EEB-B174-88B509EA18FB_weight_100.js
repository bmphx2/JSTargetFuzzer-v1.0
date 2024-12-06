new WeakSet();
const v7 = new Date();
class C9 extends Date {
    constructor(a11, a12, a13, a14) {
        super(a12);
        super.b = v7;
        this instanceof Date;
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == 0;
                        const o27 = {
                            "done": v26,
                            "value": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
    }
}
const v30 = new C9(6, 8758, 8758, -65536);
const v31 = new C9(6, -65536, 8758, 8758);
new C9(8758, 8758, 8758, 8758);
[] = v31;
const v37 = v30["setUTCHours"](268435456, 268435456);
function F41(a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 6;
    this.b = a45;
}
new F41("sticky", v31, v7);
new F41("sticky", v7, 268435456);
new F41(v37, v31, 11);
