new WeakSet();
const v6 = new WeakSet();
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a11;
    this.a = WeakSet;
}
new F7(v6, 17357, 17357);
new F7(F7, 8, 8);
new F7(WeakSet, 17357, 8);
new Float64Array(1466);
new Int16Array(129);
new Int8Array(1561);
const v27 = new BigInt64Array([-6n]);
for (const v28 of v27) {
}
