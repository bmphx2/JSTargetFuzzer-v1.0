class C3 {
    n(a5, a6) {
        let v7;
        try { v7 = a6("e", -29390); } catch (e) {}
        let v8;
        try { v8 = this.abs(-29390, this, a5, -29390, "isSealed"); } catch (e) {}
        [] = "e";
        this + v7;
        try {
            super.n();
        } catch(e11) {
        }
        return v8;
    }
    constructor(a13) {
        super.d = a13;
        super.b = "isSealed";
    }
    static 8;
}
const t20 = "isSealed";
t20["e"] &= -29390;
const v16 = C3[Symbol.cause];
try { v16(Symbol, v16); } catch (e) {}
const v18 = new C3("e");
const v19 = new C3("isSealed");
const v20 = new C3("e");
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = "isSealed";
    this.cause = -29390;
    this.g = a24;
}
new F21(v18, v19, v20);
new F21(v19, v20, F21);
new F21(v20, v18, C3);
("Q")["repeat"]()[-1];
