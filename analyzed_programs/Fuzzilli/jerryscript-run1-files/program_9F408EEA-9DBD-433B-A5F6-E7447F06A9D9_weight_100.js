function f0() {
}
class C1 {
    p() {
        this.__proto__ = this;
        const v3 = f0();
        const v5 = [this,[v3,v3,v3,v3]];
        const t7 = [v5];
        t7[this] = v5;
        return v3;
    }
    1;
    [-1] = f0;
    [f0];
    2;
}
const v7 = new C1();
const v8 = new C1();
const v9 = new C1();
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v9;
    this.b = a17;
}
const v18 = new F13(4294967296, f0, v8);
new F13(10, v18, v18);
new F13(10, v18, v7);
const v22 = new Set();
class C23 {
    toString(a25, a26, a27) {
        try { a26(v22, a27, a26, this, C1); } catch (e) {}
        super.f = a26;
        return v7;
    }
}
new C23();
new C23();
new C23();
