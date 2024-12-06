function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 556488062;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0(F0);
const v6 = [v4,v4,v3,v5,v5];
let v7 = [v5,v4,F0,v3];
[v7,v4,v5,v4,v5,v6,v3,v7];
let v12;
try { v12 = v5(); } catch (e) {}
[,v12,,...v7] = v7;
class C18 extends (5).constructor {
}
new C18();
for (let v20 = 0; v20 < 77; v20++) {
}
