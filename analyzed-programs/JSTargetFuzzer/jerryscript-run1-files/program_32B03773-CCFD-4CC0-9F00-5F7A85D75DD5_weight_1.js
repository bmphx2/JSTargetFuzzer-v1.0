function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a13;
}
new F9(1024, 1024n, 2.220446049250313e-16, -268435456n);
new F9(1024, -268435456n, 1000.0, -268435456n);
new F9(1024, -746019248n, 1000.0, 1024n);
class C18 extends F9 {
    static #n(a20, a21, a22) {
        const v24 = Symbol.toPrimitive;
        const o27 = {
            [v24]() {
                this[5] ^= -2.2250738585072014e-308;
                this[1024n];
                return a20;
            },
        };
        return 1024n;
    }
    10;
    #e;
}
new C18();
new C18();
new C18();
let v31 = 0;
while (v31 < 9) {
    class C34 extends C18 {
        b = 1024n;
        static 0;
    }
    new C34();
    new C34();
    new C34();
    v31++;
}
