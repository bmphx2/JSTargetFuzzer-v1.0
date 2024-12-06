const v0 = [];
function f1() {
    const o6 = {
        1024: v0,
        set d(a3) {
            const o4 = {
                __proto__: this,
                129: this,
                "f": this,
            };
            try { a3(o4); } catch (e) {}
        },
        9: v0,
        __proto__: v0,
        "e": v0,
        "b": v0,
        "d": v0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.h = a12;
    this.g = a12;
}
const v13 = new F10(v9);
const v14 = new F10(v7);
new F10(v7);
class C16 {
    [v14] = v13;
    m(a18, a19, a20) {
        try {
            super.valueOf(v13);
        } catch(e22) {
        }
        return v8;
    }
    constructor(a24, a25, a26) {
        v8.g = this;
        v7.__proto__ = v0;
        try { new a26(F10, a24); } catch (e) {}
        try { a25["valueOf"](); } catch (e) {}
    }
}
const v33 = new C16(v9, v13, v14);
new C16(v7, v14, C16);
new C16(v33, v13, v9);
new WeakSet();
function f39(a40, a41, a42, a43) {
    const o46 = {
        set g(a45) {
        },
        ...a41,
    };
    return o46;
}
const v47 = f39();
f39(2, v47);
v47.g **= 2;
