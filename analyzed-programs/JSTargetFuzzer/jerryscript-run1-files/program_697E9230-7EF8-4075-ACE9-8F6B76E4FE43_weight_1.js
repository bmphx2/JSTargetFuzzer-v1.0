const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a4;
}
const v5 = new F2(v1);
new F2(v1);
const v7 = new F2(v5);
[v1,Set,v5,[v5,F2,v7]];
[F2,v5];
const v15 = [268435441n,268435441n,268435441n];
try { v15.copyWithin(-24949920, v15, 268435441n); } catch (e) {}
