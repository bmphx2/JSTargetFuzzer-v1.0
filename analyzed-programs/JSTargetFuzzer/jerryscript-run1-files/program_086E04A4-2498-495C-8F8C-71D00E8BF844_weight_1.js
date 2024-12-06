new Int8Array(3);
new BigUint64Array(1000);
new BigUint64Array(1894);
const v23 = new Float32Array(3750);
Reflect.apply(("e").endsWith, v23);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a33;
    this.f = -4294967296;
}
new F28(-4294967296, 5n, "global", "-16");
new F28(-4294967296, -7n, "-16", "global");
const v36 = new F28(-4294967296, 5n, "global", "global");
if ("function" == v36) {
} else {
    function F41(a43, a44, a45) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a45;
    }
    const v46 = new F41(F41, "global", "function");
    new F41(v46, "global", "function");
    new F41(v46, "global", "function");
}
