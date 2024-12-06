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
const v21 = new C17();
const v22 = new C17();
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v3;
    this.d = F0;
    this.c = a31;
}
new F27(-13n, v5, C17);
new F27(0n, v4, v22);
new F27(0n, v21, v3);
function F40(a42, a43, a44, a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a45;
    this.f = -4294967296;
}
new F40(-4294967296, 5n, "global", "-16");
new F40(-4294967296, -7n, "-16", "global");
const v48 = new F40(-4294967296, 5n, "global", "global");
if ("function" == v48) {
} else {
    function F53(a55, a56, a57) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a57;
    }
    const v58 = new F53(F53, "global", "function");
    new F53(v58, "global", "function");
    new F53(v58, "global", "function");
}
