function f0() {
    let v3 = "D";
    const o12 = {
        set b(a5) {
            v3 >>>= a5;
            function F6(a8) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a8;
                this.g = 0.5219535138662916;
                this.e = v3;
            }
            const t11 = 0.5219535138662916;
            const v9 = new t11(this);
            new F6(v9);
            new F6(F6);
        },
        "a": 0.8571456232954259,
        "b": 0.5219535138662916,
    };
    return o12;
}
f0();
const v14 = f0();
const v15 = f0();
class C19 {
    e;
    static b;
    p(a21, a22) {
        function f23(a24, a25, a26, a27) {
            new Array(1);
            return a27;
        }
        f23(v15, v15, f0, v15);
        return this;
    }
    [65140] = v14;
}
new C19();
new C19();
new C19();
Float64Array.of();
