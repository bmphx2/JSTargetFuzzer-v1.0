function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -15;
}
const v3 = new F0();
new F0();
new F0();
const o15 = {
};
const v17 = new Proxy(v3, o15);
try { v17.replace(v17, 14521n, 1073741823, v17, 1057729492); } catch (e) {}
16 == -10n;
