function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    a13.a = 3;
}
new F9(-1073741824n, -1073741824n, NaN);
new F9(-1073741824n, 6n, 1192395092n);
new F9(-1073741824n, 6n, F9);
const v19 = new BigInt64Array(64);
const v20 = [v19];
try { (16).toLocaleString(v19, v20); } catch (e) {}
