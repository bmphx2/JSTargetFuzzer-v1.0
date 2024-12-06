function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 11153;
    this.f = 11153;
    this.b = 11153;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    get e() {
        this.__proto__ = v5;
        v4[6];
        return -1336222125n;
    }
    static #b = v3;
    #f;
    a;
    b = v5;
}
const v12 = new C6();
const v13 = new C6();
let v14 = new C6();
const v16 = new WeakSet();
for (const v20 of v13) {
    let v21;
    try { v21 = v16.delete(F0); } catch (e) {}
    let v22;
    try { v22 = v14.p(v21); } catch (e) {}
    v22 instanceof F0;
    v14 ^= v12;
}
-4294967296 ^ 52551;
typeof v13 === "undefined";
