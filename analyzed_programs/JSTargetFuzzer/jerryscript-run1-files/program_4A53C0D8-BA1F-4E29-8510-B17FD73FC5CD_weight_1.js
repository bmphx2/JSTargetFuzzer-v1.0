function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -536870912n;
    this.d = a9;
    this.h = 1024n;
}
const v10 = new F6(9007199254740992, -536870912n);
const v11 = new F6(0, -536870912n);
const v12 = new F6(-32901, 1024n);
class C17 {
    constructor(a19, a20, a21, a22) {
        let v23;
        try { v23 = this.repeat(a20, a22, a19, a21, this); } catch (e) {}
        try { v23(3, -536870912n, a20, v12); } catch (e) {}
    }
    get f() {
        return typeof -1n === "symbol";
    }
    p(a30, a31, a32) {
        try { a30(a31, v10, -536870912n, 3); } catch (e) {}
        this.f;
        return a31;
    }
}
new C17(1024n, 9007199254740992, v10, 0);
new C17(v11, 3, v10, 8);
new C17(v10, 3, v11, 8);
async function f38(a39, a40) {
    class C41 extends a40 {
    }
    return C41;
}
f38();
