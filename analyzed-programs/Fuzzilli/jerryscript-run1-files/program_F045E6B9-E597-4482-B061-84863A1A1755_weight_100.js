const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v1;
    this.b = a5;
}
const v6 = new F2(F2, v1);
const v7 = new F2(WeakSet, v1);
const v8 = new F2(WeakSet, F2);
new Map();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = F11;
}
new F11(F2, v1, v8, v1);
const v18 = new F11(WeakSet, v8, v6, v8);
new F11(v18, v1, v7, v6);
const v21 = new BigUint64Array(BigUint64Array);
new BigUint64Array(v21);
