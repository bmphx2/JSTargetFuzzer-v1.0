new Int8Array(14);
new Uint8ClampedArray(556);
new Uint32Array(10);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a27;
    this.f = -4294967296;
    -1 instanceof F24;
    for (let v31 = 0; v31 < 32; v31++) {
        const t9 = "-16";
        t9["p" + v31] = v31;
    }
}
new F24(-4294967296, 5n, "global", "-16");
new F24(-4294967296, -7n, "-16", "global");
const v36 = new F24(-4294967296, 5n, "global", "global");
if ("global" == v36) {
} else {
    function F41(a43, a44, a45) {
        if (!new.target) { throw 'must be called with new'; }
        a45.c = a45;
    }
    const v46 = new F41(F41, "global", "function");
    new F41(v46, "global", "function");
    new F41(v46, "global", "function");
}
