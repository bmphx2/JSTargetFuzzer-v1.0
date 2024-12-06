function f6(a7, a8, a9, a10) {
    const o30 = {
        __proto__: a9,
        o(a12, a13, a14, a15) {
            Object.defineProperty(a9, 127, { configurable: true, value: a15 });
            [a9,10000,a13];
            [16];
            [a7,16,a9];
            return a15;
        },
        "b": a7,
        [10000](a20, a21, a22, a23) {
            ({"b":a23,"c":a22,"e":a22,} = this);
            let v26 = -1181824561;
            ++v26;
            Math.sqrt(a8);
            Math.acosh(a20);
            return a10;
        },
    };
    return o30;
}
const v31 = f6(16, 10000, 10000, 128);
const v32 = f6(134619754, 16, 128, 128);
const v33 = f6(3, 5, v32, 134619754);
class C34 {
    static #f;
    constructor(a36, a37, a38) {
        ({"g":f6,} = a36);
        f6.__proto__ = this;
        try {
            v33.#f -= v32;
        } catch(e39) {
        }
    }
    2397;
    4;
    static #c;
    #h = v32;
    #d;
}
const v40 = new C34(v33, f6, 10000);
const v41 = new C34(v40, 134619754, 128);
const v42 = new C34(v41, 128, 10000);
const o43 = {
    __proto__: v42,
    "e": 128,
    "d": v31,
    "b": v41,
};
function F44(a46, a47, a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a48;
    this.c = a49;
}
new F44(v31, o43, v42, v33);
new F44(C34, v42, o43, v32);
new F44(v32, v32, v42, f6);
