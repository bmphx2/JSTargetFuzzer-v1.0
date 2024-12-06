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
    const o52 = {
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
            return a32;
        },
    };
    return o52;
}
f31(v4, v28, v29, v4);
f31(v3, v29, v29, v29);
f31(v29, v29, v28, v28);
class C56 {
}
const v57 = new C56();
Symbol.match = v57[Symbol.match];
