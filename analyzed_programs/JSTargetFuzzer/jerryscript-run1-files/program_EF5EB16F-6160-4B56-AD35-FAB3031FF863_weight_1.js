new Int32Array(3980);
new Uint32Array(2215);
new BigInt64Array(9);
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a27;
    this.f = -4294967296;
}
new F22(-4294967296, 5n, "global", "-16");
new F22(-4294967296, -7n, "-16", "global");
const v30 = new F22(-4294967296, 5n, "global", "global");
"function" == v30;
if (9) {
} else {
    function F35(a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a39;
    }
    const v40 = new F35(F35, "global", "function");
    new F35(v40, "global", "function");
    new F35(v40, "global", F35);
}
