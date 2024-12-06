new Float32Array(16);
new Float64Array(224);
const v11 = new Uint8Array(44);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a26;
    this.f = -4294967296;
}
new F21(-4294967296, 5n, "global", "-16");
new F21(-4294967296, -7n, "-16", "global");
const v29 = new F21(-4294967296, 5n, "global", "global");
if ("function" == v29) {
    const t12 = "function";
    delete t12[2147483649];
    v11.toString = 2147483648;
    v29.__proto__ = "function";
    const t16 = "global";
    t16.valueOf = 2147483648;
    v11[v11] = -7n;
} else {
    function F35(a37, a38, a39) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a39;
    }
    const v40 = new F35(F35, "global", "function");
    new F35(v40, "global", "function");
    new F35(v40, "global", "function");
}
