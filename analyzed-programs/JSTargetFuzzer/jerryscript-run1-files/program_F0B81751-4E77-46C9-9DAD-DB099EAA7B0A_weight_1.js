function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -12;
    this.h = -12;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(3);
const v14 = new Uint8ClampedArray(0);
new Int8Array(35);
class C18 {
    static e;
    d = v14;
}
new C18();
new C18();
new C18();
