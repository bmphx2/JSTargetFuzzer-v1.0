const v8 = new Uint16Array(3497);
new Uint8Array(10);
new Float64Array(14);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a29;
    this.f = -4294967296;
}
new F24(-4294967296, 5n, "global", "-16");
new F24(-4294967296, -7n, "-16", "global");
const v32 = new F24(-4294967296, 5n, "global", "global");
if ("function" == v32) {
} else {
    function F37(a39, a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a41;
    }
    const v42 = new F37(F37, "global", "function");
    new F37(v42, "global", "function");
    new F37(v42, "global", "function");
    for (let v45 = 0; v45 < 32; v45++) {
        1073741824n >> 5n;
        v8["p" + v45] = v45;
    }
}
