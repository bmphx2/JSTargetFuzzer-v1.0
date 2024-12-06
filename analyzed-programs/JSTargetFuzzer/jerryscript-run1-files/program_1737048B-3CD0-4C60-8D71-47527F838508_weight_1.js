const v0 = [];
class C1 {
    constructor() {
        function f3(a4) {
            const o5 = {
                4: this,
                "b": a4,
            };
            return o5;
        }
        f3(this);
        f3(f3);
        f3(this);
    }
    g;
}
new C1();
const v10 = new C1();
const v11 = new C1();
class C15 extends C1 {
    valueOf(a17, a18) {
        let v16 = this;
        try { a18.log2(v0); } catch (e) {}
        let v23 = 980.45607266156;
        const v24 = --v16;
        ++v23;
        return Math.round(v24);
    }
    e = C1;
    a = -4;
}
const v27 = new C15();
const v28 = new C15();
new C15();
function f30(a31, a32, a33, a34) {
    const o39 = {
        __proto__: a32,
        [a32]: v28,
        "d": -4,
        "e": a34,
        valueOf(a36, a37, a38) {
            [,,a36] = v0;
            a31.d = a36;
            return a33;
        },
        "h": a33,
        ...C15,
        "f": v28,
        "b": -536870912,
    };
    return o39;
}
f30(v28, v10, f30(v27, v11, f30, v28), v27);
f30(v27, v11, v10, v27);
class C43 {
    set e(a45) {
        {
        }
    }
}
