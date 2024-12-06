function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -4294967297;
    this.d = -4294967297;
    this.a = -4294967297;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f6(a7) {
    const o15 = {
        m(a9, a10) {
            const v11 = super.constructor;
            this.c = a9;
            this.toString = v11;
            return a10;
        },
        "f": a7,
        ...v3,
        "b": a7,
    };
    return o15;
}
f6(v5);
f6(F0);
const v18 = f6(v3);
class C19 {
    get h() {
        F0 %= F0;
        ("ovj").normalize("NFKD");
        try { v3["trunc"](this, v18); } catch (e) {}
        return f6;
    }
    117;
    f;
}
new C19();
new C19();
new C19();
try {
    for (const v31 of "preventExtensions") {
        break;
    }
} finally {
}
