const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a4;
    this.f = this;
    this.e = WeakMap;
}
new F2(F2, v1);
new F2(WeakMap, v1);
new F2(F2, v1);
new Float32Array(205);
new BigInt64Array(14);
new Float64Array(3321, Float64Array, WeakMap, Float64Array);
const v18 = [];
(0.7127021906311133 instanceof Uint8ClampedArray) != v18;
