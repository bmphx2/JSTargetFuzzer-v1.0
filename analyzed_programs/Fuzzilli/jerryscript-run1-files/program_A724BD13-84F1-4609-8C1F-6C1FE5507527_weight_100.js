function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -536870912;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
for (const v12 in v5) {
    for (let v13 = 0; v13 < 32; v13++) {
        v3["p" + v13] = v13;
    }
}
const v16 = delete v5?.g;
try { v16["p"](v4, v5, -4, -4, -50230); } catch (e) {}
