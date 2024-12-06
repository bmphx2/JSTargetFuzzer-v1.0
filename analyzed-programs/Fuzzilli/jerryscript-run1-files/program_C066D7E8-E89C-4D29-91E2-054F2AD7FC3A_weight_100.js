function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v12;
try { v12 = v3(-9007199254740990n, -9007199254740990n); } catch (e) {}
delete v4[F0];
v5.f &&= 512;
for (let v17 = 0; v17 < 32; v17++) {
    v12["p" + v17] = v17;
}
