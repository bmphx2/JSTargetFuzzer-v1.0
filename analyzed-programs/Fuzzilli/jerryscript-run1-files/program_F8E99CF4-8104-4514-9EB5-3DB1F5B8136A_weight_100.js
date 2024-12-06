function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -128;
    this.f = -128;
    this.e = -128;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static get f() {
        new Array(11);
        return Array;
    }
    valueOf(a12, a13) {
        try { v3["p"](F0, v5, v3, F0); } catch (e) {}
        return "p";
    }
    f;
    #d = v3;
}
const v16 = new C6();
new C6();
const v18 = new C6();
[v4,[v3,v18]];
[F0];
v16[8] = 2;
function f25(a26, a27, a28, a29) {
    const v31 = Symbol.match;
    a27[v31] = v5;
    C6 in v31;
    delete a28[257];
    return v31;
}
f25(2, f25, C6, 2);
