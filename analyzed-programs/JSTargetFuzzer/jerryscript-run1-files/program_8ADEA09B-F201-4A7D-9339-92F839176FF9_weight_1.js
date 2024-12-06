new Int8Array(14);
new Uint8ClampedArray(556);
new Uint32Array(10);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a27;
    this.f = -4294967296;
}
new F24(-4294967296, 5n, "global", "-16");
new F24(-4294967296, -7n, "-16", "global");
const v32 = new F24(-4294967296, 5n, "global", "global");
if ("global" == v32) {
} else {
    function F37(a39, a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        a41.c = a41;
    }
    const v42 = new F37(F37, "global", "function");
    new F37(v42, "global", "function");
    new F37(v42, "global", "function");
}
