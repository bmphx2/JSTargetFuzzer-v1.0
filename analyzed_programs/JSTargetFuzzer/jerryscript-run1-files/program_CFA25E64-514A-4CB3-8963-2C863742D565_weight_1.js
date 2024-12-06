function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F0;
}
new F0();
new F0();
const v5 = new F0();
let v7 = -36134n;
v7 %= v7;
Array.from(1);
let v11;
try { v11 = v5(); } catch (e) {}
Math.max(v11, 1);
function f16() {
    return f16;
}
const v22 = new Set([5.0]);
v22.clear();
new BigInt64Array(3886);
