class C3 {
    [-1] = 2.220446049250313e-16;
    constructor(a5) {
        delete this[0];
    }
}
const v13 = new C3(2.2250738585072014e-308);
const v14 = new C3(0.0);
let v15 = new C3(0.0, v14, v13);
function f16(a17, a18) {
    const o38 = {
        "h": C3,
        "a": a18,
        "d": a17,
        3: v15,
        [0.0]: 2.2250738585072014e-308,
        __proto__: a18,
        /*
        __proto__: v13,
        */
        set c(a20) {
            v13.g;
            let v22 = super.h;
            function F23(a25, a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                this[a26] = v22;
                a25.__proto__ = this;
                this.__proto__ = v22 = this;
                Math.min(this, v13, 482866.481821276);
                ++v15 << 482866.481821276;
                this.b = a20;
                this.a = v14;
            }
            new F23(a17, 0.0, a17, v22, 2.220446049250313e-16, a20);
            new F23(v13, F23, this);
            new F23(C3, a18, a17);
        },
    };
    return o38;
}
const v39 = f16(C3, 0.0);
f16(v39, 2.220446049250313e-16, v39, v13, 2.220446049250313e-16, v39, f16);
f16(v15, 2.220446049250313e-16);
let v43 = 58354n;
(v43 <<= 39655n) | 268435439n;
