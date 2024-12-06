const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v0;
    this.d = v0;
    this.f = v0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
new Uint8Array(9);
new Uint8ClampedArray(7);
new Int8Array(3645);
try { v4["then"](v4, Int8Array, Uint8Array); } catch (e) {}
class C20 {
    #f;
    #e;
    [v3] = -65535;
    static #c = v4;
}
new C20();
new C20();
new C20();
