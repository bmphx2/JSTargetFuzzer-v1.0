new BigUint64Array(10);
new Int8Array(532);
new Int16Array(127);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a29;
    this.f = -4294967296;
}
const v30 = new F24(-4294967296, 5n, "global", "-16");
new F24(-4294967296, -7n, "-16", "global");
const v32 = new F24(-4294967296, 5n, "global", "global");
if ("function" == v32) {
    255 >> 2147483648;
    const o36 = {
    };
    new Proxy(v30, o36);
} else {
    function F41(a43, a44, a45) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a45;
    }
    const v46 = new F41(F41, "global", "function");
    new F41(v46, "global", "function");
    new F41(v46, "global", "function");
}
