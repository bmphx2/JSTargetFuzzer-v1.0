new Set();
new WeakSet();
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -2.0;
    this.e = -2.0;
}
const v13 = new F7(-1.7976931348623157e+308, 1000.0, 1000.0, -1.7976931348623157e+308);
const v14 = new F7(-1.7976931348623157e+308, -1.7976931348623157e+308, -1.7976931348623157e+308, 1000.0);
const v15 = new F7(-1.7976931348623157e+308, 1000.0, -1.7976931348623157e+308, 1000.0);
function f16() {
    return F7;
}
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a22;
}
new F17(-1.7976931348623157e+308, v13, v15, v13);
new F17(-1.7976931348623157e+308, v14, v15, WeakSet);
new F17(1000.0, v15, v13, v13);
class C26 {
    set e(a28) {
        a28.toString = f16;
        v14.valueOf = C26;
    }
    127;
    constructor(a30) {
        const v31 = /D(?:a+)*/gyisum;
        v31.exec(v31);
        function F33(a35, a36, a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { new C26(a30, C26, this, C26, C26); } catch (e) {}
    }
}
new C26(C26);
