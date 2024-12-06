new Int32Array(2771);
new Uint32Array(65367);
new Int8Array(3195);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a26;
    this.f = -4294967296;
}
new F21(-4294967296, 5n, "global", "-16");
const v28 = new F21(-4294967296, -7n, "-16", -1);
new F21(-4294967296, 5n, "global", "global");
for (let v30 = 0; v30 < 32; v30++) {
    v28["p" + v30] = v30;
}
if (!("function" == "global")) {
} else {
    function F37(a39, a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a41;
    }
    const v42 = new F37(F37, "global", "function");
    new F37(v42, "global", "function");
    new F37(v42, "global", "function");
}
