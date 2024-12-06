function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a13;
    this.a = "0";
}
new F9("-12", v4, v3, "0");
new F9("0", F9, v4, "dai4");
new F9("-12", "0", v3, "0", v5, v3, v5);
const o22 = {
    o(a19, a20) {
        for (const v21 of a19) {
        }
        return this;
    },
};
try { o22.n(o22, o22); } catch (e) {}
