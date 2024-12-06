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
                        const v15 = v11 == v11;
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
const v29 = new F23(v21, v20);
new F23(v20, v29);
const v31 = new F23(v29, C1);
class C32 extends C1 {
    6;
    toString(a34, a35, a36, a37) {
        let v33 = this;
        const v38 = [null,a36];
        [v38,v38,v21,v33];
        [C1,a37,C1];
        v33 = a34 << C1;
        5.0 & v29;
        const v46 = v29 / v31;
        v20 - a34;
        Math.random();
        !v46;
        -5.0;
        return Math.log10(v20);
    }
}
const v52 = new C32();
const v53 = new C32();
const o54 = {
};
new Proxy(v53, o54);
C1.length = 177;
new C32();
[-39166];
v52[0] **= -39166;
