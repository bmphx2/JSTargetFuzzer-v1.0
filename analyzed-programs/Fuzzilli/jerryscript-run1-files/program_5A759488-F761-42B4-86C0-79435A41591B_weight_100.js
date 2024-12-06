function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = null;
    this.e = null;
}
const v3 = new F1();
const v4 = new F1();
new F1();
const o15 = {
    ..."c",
    "e": v4,
    "d": -9076n,
};
try { v3["floor"](1219003256n); } catch (e) {}
