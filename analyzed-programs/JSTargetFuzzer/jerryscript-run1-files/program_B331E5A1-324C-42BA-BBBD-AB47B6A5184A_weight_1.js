new Float32Array(6);
new Int8Array(1024);
new Uint32Array(3820);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a26;
    this.f = -4294967296;
}
new F21(-4294967296, 5n, "global", "-16");
new F21(-4294967296, -7n, "-16", "global");
const v29 = new F21(-4294967296, 5n, "global", "global");
if ("function" == v29) {
} else {
    function F34(a36, a37, a38) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = this;
    }
    const v39 = new F34(F34, "global", "function");
    new F34(v39, "global", "function");
    new F34(v39, "global", "function");
}
