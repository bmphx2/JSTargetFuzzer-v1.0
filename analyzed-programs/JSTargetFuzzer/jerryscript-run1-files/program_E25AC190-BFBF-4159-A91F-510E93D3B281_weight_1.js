function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = null;
    this.g = null;
}
new F1();
new F1();
const v5 = new F1();
function f6() {
    return v5;
}
new Uint8ClampedArray(64);
new BigUint64Array(10);
new BigInt64Array(10);
class C16 {
}
for (let i = 0; i < 5; i++) {
    function f17() {
        return f17;
    }
}
