const v2 = new Float64Array(199);
new Int16Array(v2);
new Float64Array(580);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
    this.b = 580;
}
new F9(F9, 2);
new F9(199, Float64Array);
new F9(580, 199);
const v17 = new Int16Array(Int16Array, Int16Array);
const v19 = new Uint8ClampedArray();
try { v19.set(v17, -268435456); } catch (e) {}
