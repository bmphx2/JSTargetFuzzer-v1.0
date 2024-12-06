function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4294967297;
    this.h = 4294967297;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f9() {
    return v4;
}
class C10 extends f9 {
    get h() {
        this >>> -13n;
        this.__proto__ = v4;
        return this;
    }
    static 2;
    static 7 = 0n;
    4096;
    [f9] = v4;
    e = v5;
}
new C10();
new C10();
new C10();
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a30;
    this.f = -4294967296;
}
new F25(-4294967296, 5n, "global", "-16");
new F25(-4294967296, -7n, "-16", "global");
const v33 = new F25(-4294967296, 5n, "global", "global");
if ("function" == v33) {
} else {
    function F38(a40, a41, a42) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a42;
    }
    const v43 = new F38(F38, "global", "function");
    new F38(v43, "global", "function");
    new F38(v43, "global", "function");
}
