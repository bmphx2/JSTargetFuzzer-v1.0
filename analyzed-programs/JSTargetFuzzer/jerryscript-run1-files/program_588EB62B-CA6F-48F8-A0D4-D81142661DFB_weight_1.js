new WeakSet();
new Int8Array(Int8Array);
new Float64Array(10);
new Int8Array(WeakSet);
const v12 = new Set();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    try { v12.forEach(a16, v12); } catch (e) {}
}
new F13();
