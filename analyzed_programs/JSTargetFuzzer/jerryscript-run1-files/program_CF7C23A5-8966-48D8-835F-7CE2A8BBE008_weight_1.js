new Uint16Array(8);
new BigInt64Array(512);
new BigInt64Array(71);
const v11 = new BigInt64Array(2863);
v11[9] = "2147483647";
function f16() {
    return 8;
}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a31;
    this.f = -4294967296;
}
new F26(-4294967296, 5n, "global", "-16");
new F26(-4294967296, -7n, "-16", "global");
const v34 = new F26(-4294967296, 5n, "global", "global");
if ("function" == v34) {
} else {
    function F39(a41, a42, a43) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a43;
    }
    const v44 = new F39(F39, "global", "function");
    new F39(v44, "global", "function");
    new F39(v44, "global", "function");
}
