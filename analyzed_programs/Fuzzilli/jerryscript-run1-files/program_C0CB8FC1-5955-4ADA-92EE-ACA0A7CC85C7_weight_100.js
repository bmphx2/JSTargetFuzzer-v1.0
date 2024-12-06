function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 65537;
    this.e = 65537;
}
const v17 = new F14();
const v18 = new F14();
function f19(a20) {
    let o25 = {
        "h": F14,
        valueOf(a22, a23) {
            const o24 = {
                __proto__: this,
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
        ...v18,
        "g": a20,
        [F14]: v18,
        13: a20,
    };
    const o27 = {
        get a() {
            v17[this] = this;
            o25 = 5.0;
            return this;
        },
        "f": 5.0,
        [o25]: a20,
        ...o25,
    };
    return o25;
}
f19(v17);
gc(129);
class C30 {
}
