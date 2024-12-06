[15];
const v1 = [-13,64,268435441,-1733520118,256];
const v2 = [9];
function f3() {
    return v2;
}
function f13(a14, a15, a16) {
    const v17 = a16 != v1;
    function f18() {
        return v1;
    }
    return v17;
}
f13(v1, v2, 8n);
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a31;
    this.f = 8;
}
const v32 = new F26(8, 5n, "global", "-16");
new F26(8, -7n, "-16", "global", -1, v32);
const v34 = new F26(8, 5n, "global", "global");
if ("function" == v34) {
} else {
    function F39(a41, a42, a43) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a43;
    }
    const v44 = new F39(F39, "global", "function");
    new F39(v44, "global", "function");
    new F39(v44, "global", "function");
}
