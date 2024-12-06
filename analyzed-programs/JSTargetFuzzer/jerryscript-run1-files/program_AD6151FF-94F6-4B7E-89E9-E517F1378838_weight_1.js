function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a26;
    this.f = a25;
}
new F21(-4294967296, 5n, "global", "-16");
const v28 = new F21(-4294967296, -7n, "-16", "global");
const v29 = new F21(v28, 5n, "global", "global");
if ("global" == v29) {
} else {
    function F34(a36, a37, a38) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a38;
    }
    const v39 = new F34(F34, "global", "function");
    const v40 = new F34(v39, "global", "function");
    new F34(v39, "global", v40);
}
