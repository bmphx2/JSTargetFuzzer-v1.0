class C3 {
    static n(a5, a6) {
        const v8 = Symbol.unscopables;
        this[v8] = this;
        v8[9223372036854775807] = a5;
        return this;
    }
    set f(a10) {
        let v9 = this;
        let v13 = -2.220446049250313e-16;
        Math.expm1(268435439);
        Math.cosh(v13);
        Math.min(268435439);
        Math.acos("n");
        ++v9;
        ++v13;
        ++v9;
    }
}
const v21 = new C3();
const v22 = new C3();
const v23 = new C3();
function f24(a25, a26) {
    const o30 = {
        5: v21,
        7: a25,
        ...v21,
        set a(a28) {
            let v27 = this;
            super.d >>>= a28;
            a25.f;
            v27 = C3;
        },
        "b": v21,
        "c": v21,
        [C3]: a25,
        2147483649: a25,
    };
    return o30;
}
f24(v23, C3);
const v32 = f24(v22, v21);
f24(v21, v22);
v32.b <<= -65535;
Object.defineProperty(v21, 9, { configurable: true, set: f24 });
("n").__proto__ in "n";
class C39 {
    e = v21;
    static [v21];
}
new C39();
new C39();
new C39();
