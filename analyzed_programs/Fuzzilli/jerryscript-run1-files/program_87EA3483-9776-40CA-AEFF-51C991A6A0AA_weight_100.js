const v2 = new BigInt64Array(257);
const v5 = new Int32Array(2877);
new Float64Array(256);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
}
new F9(256, v2, 256, 257);
new F9(256, Float64Array, 2877, 256);
new F9(256, F9, 257, 257);
v5[1] = Int32Array;
let v18;
try { v18 = v2(); } catch (e) {}
v18 = v5;
class C19 extends F9 {
    valueOf(a21, a22) {
        return v5 == a22 ? v5 : a22;
    }
}
new C19();
new C19();
new C19();
