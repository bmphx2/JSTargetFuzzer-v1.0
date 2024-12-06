class C3 {
    a;
    d;
    static get g() {
        ("x")[182];
        d = "h";
        return "h";
    }
    n(a7, a8) {
        super.d = "h";
        a7[this] = "x";
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
const v17 = new F12(v9, v9);
new F12(v10, v9);
[42783,-36101,10];
const v23 = Array(v17);
Object.defineProperty(Array, "g", { configurable: true, set: Array });
new Array(512);
"x" && v17;
const o28 = {
    __proto__: v23,
};
o28[o28];
