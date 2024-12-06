function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870889;
}
new F0();
new F0();
const v5 = new F0();
function f10() {
    return v5;
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
}
const v15 = new F11(v5, 5);
const v16 = new F11(v15, 536870912);
new F11(v16, 536870912);
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a32;
    this.f = -4294967296;
}
new F27(-4294967296, 5n, "global", "-16");
new F27(-4294967296, -7n, "-16", "global");
const v35 = new F27(-4294967296, 5n, "global", "global");
if ("function" == v35) {
} else {
    function F40(a42, a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a44;
    }
    const v45 = new F40(F40, "global", "function");
    new F40(v45, "global", "function");
    new F40(v45, "global", "function");
}
