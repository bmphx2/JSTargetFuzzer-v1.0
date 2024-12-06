new Uint32Array(5);
new Int32Array(2883);
new Int32Array(16);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
}
const v15 = new F9(16, 2883, 5, 16);
new F9(2883, v15, 5, Int32Array);
new F9(16, 5, Int32Array, 16);
isNaN.apply(isNaN, isNaN);
