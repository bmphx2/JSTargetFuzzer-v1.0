const v3 = [47680n,-5n,47680n,47680n];
const v4 = [-1073741824n];
const v5 = [v4,v3];
new WeakSet();
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
    this.b = -5n;
    this.f = a12;
}
new F8(-5n, v5, v4, 47680n);
new F8(-1073741824n, v4, F8, -1073741824n);
new F8(-1073741824n, WeakSet, F8, -1073741824n);
const v19 = new Float64Array(128);
v19[1].__proto__;
