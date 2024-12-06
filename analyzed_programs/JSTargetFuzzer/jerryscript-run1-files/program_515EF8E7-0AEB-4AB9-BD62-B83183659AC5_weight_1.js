function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.g = 9007199254740991;
    this.e = 9007199254740991;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f9() {
    return -1437879986;
}
class C10 extends f9 {
    m(a12, a13) {
        a13.__proto__ = v3;
        function f14() {
            return C10;
        }
        return a12;
    }
    [f9];
    [-1];
    0;
    e = v5;
}
new C10();
new C10();
new F0();
const v19 = new BigUint64Array();
RegExp.bind(v19);
