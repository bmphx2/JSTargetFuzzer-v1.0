const v2 = [-6,1,128,959659090,-1073741824];
const o3 = {
};
const v5 = new Proxy(v2, o3);
class C6 {
}
const v7 = new C6();
delete v5[v7];
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "valueOf";
    this.d = "__proto__";
    this.g = "__proto__";
}
const v13 = new F10(F10);
new F10(v13);
new F10("__proto__");
const o21 = {
    get f() {
        super.e = "v";
        return this;
    },
};
