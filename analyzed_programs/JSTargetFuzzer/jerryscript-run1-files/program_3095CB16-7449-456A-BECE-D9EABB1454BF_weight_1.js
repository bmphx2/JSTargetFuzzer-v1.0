new BigInt64Array(257);
new Float64Array(10);
new Int16Array(10);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a26;
    this.f = -4294967296;
}
new F21(-4294967296, 5n, "global", "-16");
new F21(-4294967296, -7n, "-16", "global");
new F21(-4294967296, 5n, "global", "global");
if ("function" == BigInt64Array) {
} else {
    function F34(a36, a37, a38) {
        if (!new.target) { throw 'must be called with new'; }
        F34.c = a38;
    }
    const v39 = new F34(F34, "global", "function");
    new F34(v39, "global", "function");
    new F34(v39, "global", "function");
}
