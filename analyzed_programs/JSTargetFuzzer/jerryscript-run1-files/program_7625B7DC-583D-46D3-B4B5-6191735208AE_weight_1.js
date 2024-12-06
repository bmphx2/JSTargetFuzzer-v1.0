function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = null;
    this.b = null;
    this.a = null;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v8 = new WeakSet();
function f9(a10, a11) {
    const o27 = {
        ...v4,
        valueOf(a13, a14, a15, a16) {
            for (let i18 = 0; i18 < 9; i18++) {
            }
            return a10;
        },
    };
    return o27;
}
const v28 = f9(v4, v4);
const v29 = f9(v5, v4);
f9(v29, v4);
function f31(a32, a33, a34, a35) {
    const o55 = {
        "b": null,
        "c": v5,
        m(a37, a38, a39) {
            const v40 = super.b;
            const v41 = [a38,v40];
            const v42 = [a39,F1,v4,this];
            [v28,v42,v42,v41];
            return v40;
        },
        o(a45, a46, a47, a48) {
            a48 = v8;
            const v51 = [-2.4854739471653904,0.2907255806360177,-5.689185199837803,0.34431548197033923,1000000000.0,2.220446049250313e-16,7.9180446268630895,-1.7865780343190856e+307,38.014207864445325];
            v51.indexOf(2.220446049250313e-16, v51, a46);
            return a32;
        },
    };
    return o55;
}
f31(v4, v28, v29, v4);
f31(v3, v29, v29, v29);
f31(v29, v29, v28, v28);
class C59 {
}
const v60 = new C59();
Symbol.match = v60[Symbol.match];
