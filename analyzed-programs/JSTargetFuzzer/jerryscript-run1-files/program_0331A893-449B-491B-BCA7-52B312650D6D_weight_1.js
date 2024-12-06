function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 10;
    this.a = 10;
    this.e = 10;
}
new F0();
new F0();
class C6 {
    constructor(a8) {
        function f9(a10, a11) {
            delete this["getUTCSeconds"];
            return a11;
        }
        new Promise(f9);
    }
}
new C6();
new F0();
function f23() {
    return "number";
}
const v26 = new BigUint64Array(16);
v26.copyWithin();
let v28 = 1n;
v28 %= 2147483648n;
