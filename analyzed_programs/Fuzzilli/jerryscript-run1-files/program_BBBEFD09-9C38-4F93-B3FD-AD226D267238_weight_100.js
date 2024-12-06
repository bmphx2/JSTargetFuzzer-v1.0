function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
    this.c = a5;
    this.h = "species";
}
const v6 = new F3("e");
const v7 = new F3(F3);
const v8 = new F3(v6);
new WeakSet();
class C11 extends WeakSet {
    3442770437 = WeakSet;
    constructor(a13, a14, a15, a16) {
        super(a15);
        const v17 = this.f;
        try { ("iterator").codePointAt(v17); } catch (e) {}
    }
    static {
        v6["species"] = 256;
        this.toString = F3;
        try { new WeakSet(...v6, ..."species", 256, v8); } catch (e) {}
    }
}
new C11("species", v8, "e", "iterator");
const v25 = new C11(C11, v7, "e", "e");
let v26 = new C11(F3, v25, "species", "species");
v26--;
v26 % v26;
Math.floor(v26);
const t26 = "iterator";
t26.length **= Math.asin(-v26);
