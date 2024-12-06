const v1 = new WeakMap();
function f5() {
    f5 = WeakMap;
    let v6;
    try { v6 = v1.delete(9223372036854775807n); } catch (e) {}
    try { new v6(v6, 257n); } catch (e) {}
    try { v1.set(4294967296n, v6); } catch (e) {}
    return 9223372036854775807n;
}
const v15 = [WeakMap,1929596624,257n,257n];
[v15];
const v17 = [v15,9223372036854775807n,f5,1929596624];
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v17;
    this.g = v17;
    let v26 = -52411;
    v15[10] >>>= 2147483648;
    v26 = a20;
    this.d = a20;
}
new F18(v17, -382, 257n, v15);
new F18(v17, -382, 9223372036854775807n, v17);
new F18(v15, 1929596624, 4294967296n, v17);
try { null.set(); } catch (e) {}
