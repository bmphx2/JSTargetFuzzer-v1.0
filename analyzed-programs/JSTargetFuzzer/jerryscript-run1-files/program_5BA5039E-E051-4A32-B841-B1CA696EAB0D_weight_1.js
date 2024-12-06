const v3 = new Float32Array(2919);
new BigInt64Array(4);
new Float64Array(7);
function f10(a11, a12, a13, a14) {
    const o18 = {
        "f": a14,
        set c(a16) {
            const v17 = this.f;
            this[536870889] -= 7;
            super.a = v3;
            super.g = v17;
        },
        "e": a12,
        "h": a11,
        "b": Float32Array,
        "g": 4,
        "c": a12,
    };
    return a11;
}
f10(2919, 4, 7, 7);
f10(2919, 4, 4, 4);
f10(4, 4, 4, 2919);
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
    this.f = -4294967296;
}
new F31(-4294967296, 5n, "global", "-16");
new F31(-4294967296, -7n, "-16", "global");
const v39 = new F31(-4294967296, 5n, "global", "global");
if ("function" == v39) {
} else {
    function F44(a46, a47, a48) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a48;
    }
    const v49 = new F44(F44, "global", "function");
    new F44(-1, "global", "function");
    new F44(v49, "global", "function");
}
