new Uint8Array(129, 268435440n, -65537n, -1.5014073070273802e+308);
new Int16Array(3664);
new Int8Array(223);
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
