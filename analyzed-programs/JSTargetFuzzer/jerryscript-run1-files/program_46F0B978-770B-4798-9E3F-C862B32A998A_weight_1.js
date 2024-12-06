function f6() {
    return -5;
}
class C10 extends f6 {
    static ["valueOf"] = "symbol";
    f;
    ["ignoreCase"];
    n(a12, a13, a14, a15) {
        const v16 = [];
        const o17 = {
        };
        const v19 = new Proxy(v16, o17);
        try {
            new v19();
        } catch(e21) {
        } finally {
        }
        const t17 = "gKe9P";
        t17[a12] = 1;
        try {
            super.valueOf(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray, "valueOf");
        } catch(e24) {
        }
        return "symbol";
    }
    0;
    static ["symbol"] = "valueOf";
    9;
}
new C10();
new C10();
new C10();
with (Symbol.isConcatSpreadable) {
    function F34(a36, a37, a38) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F34(description);
}
