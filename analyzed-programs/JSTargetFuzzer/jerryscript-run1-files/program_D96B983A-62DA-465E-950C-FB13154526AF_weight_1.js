new Int32Array(255);
new Uint32Array(10);
new Uint32Array(1045);
new WeakSet();
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a25;
    this.f = -4294967296;
}
new F20(-4294967296, 5n, "global", "-16");
new F20(-4294967296, -7n, "-16", "global");
const v28 = new F20(-4294967296, 5n, "global", "global");
if ("function" == v28) {
} else {
    function F33(a35, a36, a37) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a37;
    }
    const v38 = new F33(F33, "global", "-16");
    new F33(v38, "global", "function");
    new F33(v38, "global", "function");
}
