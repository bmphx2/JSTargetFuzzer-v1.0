function f6(a7, a8) {
    const o9 = {
        "e": a7,
        __proto__: a8,
        "g": a8,
        "d": 4.0,
        "f": 3.163235202525671,
        "a": a8,
        ...a8,
        [8]: a7,
        65535: a7,
        "c": 4.0,
        "h": 3.163235202525671,
        ...3.163235202525671,
        "b": 8,
        ...4.0,
    };
    return o9;
}
const v10 = f6(-14335, -2147483649);
const v11 = f6(8, -2147483649);
const v12 = f6(8, -14335);
class C13 extends f6 {
    [v10] = 8;
    constructor(a15, a16, a17, a18) {
        super(-14335, -2147483649);
        const v20 = new Date();
        v12[-14335] /= a16;
        Date[4.0] <<= a17;
        this.h = v20;
        function F21(a23, a24, a25, a26) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a15;
            this.d = v10;
            this.g = a15;
        }
        new F21(a18, this, a18, a17);
        new F21(a18, v12, 4.0, a18);
        new F21(3.163235202525671, v11, a17, a18);
    }
}
new C13(-14335, 8, 3.163235202525671, -1.0);
new C13(-2147483649, -14335, 3.163235202525671, -1.0);
new C13(-14335, -2147483649, 4.0, 4.0);
Math.expm1(4.0);
