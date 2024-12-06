function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a8.f = a9;
    this.d = 536870888n;
}
const v11 = new F6("tS", "tS", -65536n);
new F6("tS", "number", -22737n);
const v13 = new F6("tS", "bigint", 536870888n);
class C14 {
    constructor(a16) {
        const v18 = ("number").search(v11);
        try { new v18(); } catch (e) {}
    }
}
new C14(C14, v13, -22737n);
