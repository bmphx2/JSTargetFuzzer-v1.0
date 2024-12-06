class C3 {
    a;
    d;
    static get g() {
        ("h")[182];
        d = "h";
        return "h";
    }
    n(a7, a8) {
        super.d = "h";
        const t10 = "h";
        t10[this] = "x";
        return "x";
    }
}
const v9 = new C3();
const v10 = new C3();
new C3();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = C3;
}
new F12(v10, v10);
new F12(v9, v9);
new F12(v10, v9);
const v20 = [42783,-36101,10];
const v23 = Array(61);
const o24 = {
    __proto__: v23,
};
v20[o24];
