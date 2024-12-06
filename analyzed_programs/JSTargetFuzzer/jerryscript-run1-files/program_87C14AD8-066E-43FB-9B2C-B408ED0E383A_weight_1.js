function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -6362;
    this.d = -6362;
}
new F0();
new F0();
new F0(F0);
new WeakMap();
const v19 = new BigUint64Array(256);
try { v19.set(BigUint64Array); } catch (e) {}
