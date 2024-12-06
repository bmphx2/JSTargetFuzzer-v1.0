function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 36137;
}
new F0();
new F0();
const v5 = new F0();
const v10 = new WeakMap();
new WeakMap(v5);
class C16 {
    e = v10;
    a;
    8 = v10;
}
new C16();
new C16();
new C16();
