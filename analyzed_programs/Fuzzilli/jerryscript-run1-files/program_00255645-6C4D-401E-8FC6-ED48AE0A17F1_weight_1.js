function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1000;
    this.e = 1000;
    this.f = 1000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o17 = {
        "d": a8,
        ...v5,
        "b": v4,
        __proto__: v4,
        "h": F0,
        [a7]: a7,
        "c": v4,
        toString(a10, a11, a12, a13) {
            a10[1209] = v5;
            [v5,a10,a7,F0,v5];
            [this,F0,F0,[v4,a8,F0,v5]];
            return a7;
        },
    };
    return o17;
}
let v18 = f6(v5, v3);
let v19 = f6(v3, v4);
f6(v19, v5);
class C24 {
    static {
        let v27;
        try { v27 = this["toString"](); } catch (e) {}
        v27?.a;
        ("toString")[Symbol.unscopables];
    }
    constructor(a33, a34, a35, a36) {
        let v37 = 0;
        do {
            a35 = a36;
            a33 != f6;
            v37++;
        } while (v37 < 9)
    }
}
const v42 = new C24(v4, v3, v3, "repeat");
const v43 = new C24(v3, "repeat", v3, "d");
const v44 = new C24(v42, "Wxjh7", v43, "d");
async function* f45(a46, a47, a48, a49) {
    v18 = C24;
    v19 |= a46;
    new WeakRef(a47, WeakRef, WeakRef, WeakRef);
    await v44;
    yield f6;
    return v4;
}
f45("Wxjh7", "Wxjh7", v4, v19);
