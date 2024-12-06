class C3 {
    get e() {
        let v4 = this;
        v4[-1.5709269520860314] = -2.220446049250313e-16;
        v4 <<= v4;
        const t5 = -1.5709269520860314;
        t5.e &= v4;
        const v5 = v4[4];
        const v7 = Symbol.toPrimitive;
        v5[v7] = v7;
        return v7;
    }
    static #c;
}
const v8 = new C3();
const v9 = new C3();
const v10 = new C3();
const v11 = [1.4551236391251098e+308,v10];
[v8,-2.220446049250313e-16];
[-1.5709269520860314];
class C14 {
    p(a16, a17) {
        return -2.220446049250313e-16;
    }
    f = 1.4551236391251098e+308;
    g = v9;
    static #h = v11;
    11;
}
new C14();
new C14();
const v24 = new C14();
const v26 = Symbol.toPrimitive;
const o36 = {
    [v26]() {
        function F28(a30, a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = this;
        }
        const v33 = new F28(v24, -1.5709269520860314, C3);
        new F28(F28, 1.4551236391251098e+308, v9);
        new F28(v33, -2.220446049250313e-16, v8);
        return -1.5709269520860314;
    },
};
