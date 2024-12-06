new Uint8Array(0);
new Uint16Array(3);
const v14 = new Float64Array(4);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v14;
    this.f = -4294967296;
}
new F24(-4294967296, 5n, "-16", "-16");
new F24(-4294967296, 8n, "-16", "global");
const v32 = new F24(-4096, 5n, "global", "global");
if ("2147483648" == v32) {
} else {
    function F37(a39, a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a41;
    }
    const v42 = new F37(F37, "global", "function");
    new F37(v42, "global", "function");
    new F37(v42, "global", "function");
}
