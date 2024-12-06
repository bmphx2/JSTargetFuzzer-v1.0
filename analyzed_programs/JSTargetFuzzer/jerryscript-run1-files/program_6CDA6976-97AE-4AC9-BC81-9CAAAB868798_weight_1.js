function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -51699;
    this.a = -51699;
    this.c = -51699;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C12 extends F0 {
    static {
        Object.defineProperty(v5, 268435441, { enumerable: true, value: this });
        let v14;
        try { v14 = v3(); } catch (e) {}
        v14 + v5;
    }
    #c;
    constructor(a17, a18, a19, a20) {
        super();
        const o21 = {
        };
        new Proxy(a20, o21);
    }
    static #e;
    static 3551343934 = -354.58235837473046;
}
new C12(-2.2250738585072014e-308, -2.2250738585072014e-308, -94927.14244708233, "p");
new C12(-354.58235837473046, -354.58235837473046, -94927.14244708233, "b");
new C12(-2.2250738585072014e-308, -2.2250738585072014e-308, -2.2250738585072014e-308, "f");
new BigInt64Array(865);
new Uint8ClampedArray(256);
new Float32Array(3159);
if (865) {
    new Set();
    const v39 = Symbol.iterator;
    const o48 = {
        [v39]() {
            let v41 = 10;
            const o47 = {
                next() {
                    v41--;
                    const v45 = v41 == 0;
                    const o46 = {
                        "done": v45,
                        "value": v41,
                    };
                    return o46;
                },
            };
            return o47;
        },
    };
} else {
}
