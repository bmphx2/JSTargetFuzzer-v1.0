new Uint8ClampedArray(1000);
new Uint8Array(0);
new BigInt64Array(257);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1000;
}
new F12(1000, -1536651001, 9007199254740991);
let v18 = 0;
while (v18 < 1) {
    v18++;
}
new F12(257, -12, 0);
new F12(-12, 9007199254740991, 0);
function f27() {
    return f27;
}
class C28 extends f27 {
}
const v29 = new C28();
EvalError(v29[5]);
