const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
}
new F1();
const v4 = new F1();
const v5 = new F1();
for (const v13 of v0) {
    const v14 = [v13,v13,v13,F1];
    const v15 = [-1077135716n,Date];
    [98907330,v15,v15,v14,3];
}
const v17 = new Date();
Date(v17 << F1);
try { v4.seal(); } catch (e) {}
const v21 = v5 == 98907330;
16 >= v21 ? 16 : v21;
v17["toISOString"]();
