function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1;
    this.g = -1;
    this.d = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [F0,v3,v4,v4,v4];
const v7 = [v4,v3,F0];
[v4];
class C12 extends F0 {
    f;
    get d() {
        return 4n;
    }
    #a;
    static 3079 = v3;
    1024 = 4n;
    g = F0;
    static #b;
}
const v17 = new C12();
const v18 = new C12();
const v19 = new C12();
for (const v20 in v19) {
    let v21;
    try { v21 = new F0(v20, v20, v20, v20, ...v20, v20); } catch (e) {}
    v20 in v21;
}
try { v5(268435439n, v7, v3, v18); } catch (e) {}
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740991n;
    this.f = v19;
    this.g = a29;
}
new F24(v17, v18, F0, v17);
new F24(v4, v19, v6, v17);
new F24(v4, v19, v4, v18);
