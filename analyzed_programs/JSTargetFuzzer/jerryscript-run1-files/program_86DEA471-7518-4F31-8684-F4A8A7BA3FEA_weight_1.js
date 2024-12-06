new Int8Array(187);
new Int16Array(255);
new Uint8ClampedArray(255);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v18 = new F15();
const v19 = new F15();
function f20(a21, a22) {
    const o28 = {
        ...v19,
        __proto__: v18,
        m(a24, a25, a26, a27) {
            return this;
        },
    };
    return o28;
}
for (const v30 in f20()) {
    f20().d;
    const v34 = Symbol.unscopables;
    function f36() {
        return 12206;
    }
    class C37 extends f36 {
        constructor(a39, a40, a41, a42) {
            super();
            ("symbol")["lastIndexOf"](12206);
        }
    }
    new C37(f36, C37, C37, C37);
    v19[v34] = v19;
}
