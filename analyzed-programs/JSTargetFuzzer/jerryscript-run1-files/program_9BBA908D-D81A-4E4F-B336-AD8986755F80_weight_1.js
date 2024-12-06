class C1 {
    constructor() {
        let v2 = this;
        v2 *= v2;
        const v5 = -44621 | null;
        null / v5;
        v5 >> v2;
        const v9 = Symbol.iterator;
        const o18 = {
            [v9]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 == 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                return o17;
            },
        };
    }
}
const v19 = new C1();
const v20 = new C1();
const v21 = new C1();
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    const o28 = {
        get prototype() {
            return this;
        },
    };
    this.d = v19;
}
const v29 = new F23(v19, v20);
new F23(v20, v29);
new F23(v29, C1);
class C32 extends F23 {
    6;
    toString(a34, a35, a36, a37) {
        let v33 = this;
        const v38 = [null,a36];
        [v38,v38,v21,a35];
        [C1,v21,a37];
        a35 << C1;
        v33 = a34;
        5.0 & v29;
        const v46 = v29 / v29;
        v20 - a34;
        Math.random();
        const v49 = !v46;
        -5.0;
        Math.log10(v20);
        return v49;
    }
}
new C32();
new C32();
new C32();
const t64 = [2];
t64[0] **= -39166;
