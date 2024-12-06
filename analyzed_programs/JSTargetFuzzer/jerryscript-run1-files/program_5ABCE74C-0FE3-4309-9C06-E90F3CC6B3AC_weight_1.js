new Float64Array(255);
new Uint8ClampedArray(10);
new Int32Array(Int32Array);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
    this.g = 10;
}
const v15 = new F10(4, 4, 10);
const v16 = new F10(255, v15, 10);
new F10(4, v16, 4);
([]).sort();
