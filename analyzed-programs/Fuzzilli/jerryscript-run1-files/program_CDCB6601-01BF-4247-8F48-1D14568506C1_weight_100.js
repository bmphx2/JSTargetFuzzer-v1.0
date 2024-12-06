new Uint8Array(4);
new Uint8ClampedArray(223);
new Int32Array(8);
const v21 = -8 / -9;
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a25;
    this.b = a24;
}
new F22(8, -1.5594075862115126e+308);
new F22(v21, -1.5594075862115126e+308);
new F22(Uint8Array, 2.2250738585072014e-308);
