const v0 = [-4.0];
const v1 = [-2.0,0.3378515468794532,Infinity,-3.0,-3.0,0.24896007117508723];
const v2 = [-1.4882601473816037e+308];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    v2.g = v1;
}
new F3(v2);
new F3(v0);
new F3(F3);
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
    const v42 = new F37(F37, "global", F37);
    new F37(v42, "global", "function");
    new F37(v42, "global", "function");
}
