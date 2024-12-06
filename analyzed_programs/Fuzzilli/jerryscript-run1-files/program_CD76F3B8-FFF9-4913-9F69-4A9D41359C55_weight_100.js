function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 65537;
    this.e = 65537;
}
const v17 = new F14();
const v18 = new F14();
function f19(a20) {
    let o26 = {
        "h": F14,
        valueOf(a22, a23) {
            const o25 = {
                __proto__: this,
                get h() {
                    Object.defineProperty(a23, this, { writable: true, enumerable: true, set: gc });
                    a22.c = 5.0;
                    return -9223372036854775808;
                },
                "b": v17,
                "h": this,
                "c": 5.0,
            };
            return a23;
        },
        [v18]: v17,
        __proto__: 5.0,
        ...v17,
        "e": 5.0,
        3: f19,
        536870887: f19,
        [128]: a20,
        "f": f19,
        [f19]: a20,
        "c": 129,
        "b": F14,
        ...v18,
        "g": a20,
        [F14]: v18,
        13: a20,
    };
    const o28 = {
        get a() {
            v17[this] = this;
            o26 = 5.0;
            return this;
        },
        "f": 5.0,
        [o26]: a20,
        ...o26,
    };
    return o26;
}
f19(v17);
gc(129);
class C31 {
}
