function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4294967297;
    this.h = 4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9() {
    v4[v3];
    return v4;
}
class C17 extends f9 {
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
new C17();
new C17();
new C17();
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a37;
    this.f = -4294967296;
}
new F32(-4294967296, 5n, "global", "-16");
new F32(-4294967296, -7n, "-16", "global");
const v40 = new F32(-4294967296, 5n, "global", "global");
if ("function" == v40) {
} else {
    function F45(a47, a48, a49) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a49;
    }
    const v50 = new F45(F45, "global", "function");
    new F45(v50, "global", "function");
    new F45(v50, "global", "function");
}
