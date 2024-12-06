function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 16;
    this.h = 16;
}
new F0();
const v4 = new F0();
new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 15376;
    this.e = a15;
    try { a15(); } catch (e) {}
    const t13 = "undefined";
    t13.length = -1665896699;
    try { v4.n("f", "f"); } catch (e) {}
    const t16 = "setUint8";
    t16.__proto__ = v4;
    this.e;
    this.g = a15;
}
new F12("f", 15376);
new F12("setUint8", 15376);
new F12("undefined", 15376);
Math.tan();
