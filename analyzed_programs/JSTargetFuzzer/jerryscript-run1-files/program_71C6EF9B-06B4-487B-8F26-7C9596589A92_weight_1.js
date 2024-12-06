function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v6 = 1073741824n;
++v6;
new Set([1073741825,10000,129,257,562671243,-128,5,1950358049,1862516392]);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a18;
    this.a = "0";
}
new F14("-12", v4, v3, "0");
new F14("0", F14, v4, "dai4");
new F14("-12", "0", v3, "0", v5, v3, v5);
const o27 = {
    o(a24, a25) {
        for (const v26 of a24) {
        }
        return this;
    },
};
try { o27.n(o27, o27); } catch (e) {}
