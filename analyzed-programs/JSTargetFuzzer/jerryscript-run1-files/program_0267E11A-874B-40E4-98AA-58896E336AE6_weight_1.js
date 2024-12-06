class C3 {
    static set b(a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a8;
        }
        new F6(a5, 11);
        new F6(129, -2);
        new F6(129, a5);
    }
    [11] = 11;
    c;
    static [129];
    static [11];
    static [-2] = -2;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f16(a17, a18) {
    const o43 = {
        "h": a18,
        "f": v14,
        "b": a17,
        5: 11,
        __proto__: v15,
        valueOf(a20, a21, a22) {
            let {"c":v23,"f":v24,"h":v25,...v26} = this;
            let v28 = 268435439;
            const v31 = v28 ^ -2;
            Math.log(-2);
            ++v28;
            -(-1000000.0);
            -v31;
            `f${C3}MIN_SAFE_INTEGER`;
            v13[4089];
            !-2;
            Math.hypot(a20);
            return this;
        },
    };
    return o43;
}
f16(129, 129);
f16(129, 11);
f16(129, -2);
function F50(a52) {
    if (!new.target) { throw 'must be called with new'; }
}
class C53 extends F50 {
    constructor(a55, a56, a57) {
    }
    get e() {
        try { v14.toString(); } catch (e) {}
        super.e;
        a = 129;
        return C3;
    }
    /*
    constructor(a62, a63, a64) {
        let v65 = 2110820557n;
        v65 /= 11n;
    }
    */
}
