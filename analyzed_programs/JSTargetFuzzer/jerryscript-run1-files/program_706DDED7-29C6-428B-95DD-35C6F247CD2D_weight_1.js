function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a9.a = -536870912n;
    this.MIN_VALUE = a9;
    this.h = 1024n;
}
const v10 = new F6(9007199254740992, -536870912n);
const v11 = new F6(0, -536870912n);
const v12 = new F6(-32901, 1024n, 1024n, -1n, 1024n);
class C17 {
    constructor(a19, a20, a21, a22) {
        let v23;
        try { v23 = this.repeat(a20, a22, a19, a21, this); } catch (e) {}
        ("p")["split"]("2147483648");
        eval();
        try { v23(128, -536870912n, a20, v12); } catch (e) {}
    }
    get f() {
        return typeof -1n === "symbol";
    }
    p(a36, a37, a38) {
        try { a36(a37, v10, -536870912n, 128); } catch (e) {}
        this.f;
        return a37;
    }
}
new C17(-1n, 9007199254740992, v10, 0);
new C17(v11, 128, v10, 8);
new C17(v10, 128, v11, 10000, 8, C17);
async function f44(a45, a46) {
    class C47 extends a46 {
    }
    return C47;
}
f44();
