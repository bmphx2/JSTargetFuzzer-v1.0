new Set();
const v5 = [-2.0,-2.0,-Infinity,0.5355801657919322,NaN,4.177844735271947,1.0,-2.9054056363266305,-5.0];
[391.45293983424426,6.382689094574044];
const v7 = [-2.220446049250313e-16,1000000000.0];
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a14;
}
new F11(10, v5);
new F11(37529, v5);
new F11(4294967295, v7);
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a32;
    this.f = -4294967296;
}
new F27(-4294967296, 5n, "global", "-16");
new F27(-4294967296, -7n, "-16", "global");
const v35 = new F27(-4294967296, 5n, "global", "global");
if ("function" == v35) {
} else {
    function F40(a42, a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a44;
    }
    const v45 = new F40(F40, "global", "function");
    new F40(v45, "global", "function");
    new F40(v45, "global", "function");
}
