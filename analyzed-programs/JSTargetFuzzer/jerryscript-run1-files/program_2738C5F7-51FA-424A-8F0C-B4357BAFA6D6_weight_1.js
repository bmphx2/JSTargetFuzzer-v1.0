[15];
const v1 = [-13,64,268435441,-1733520118,256];
const v2 = [9];
function f3() {
    v2.__proto__ = v2;
    const v4 = v1;
    return v2;
}
function f17(a18, a19, a20) {
    const v21 = a20 != v1;
    function f22() {
        return v1;
    }
    return v21;
}
f17(v1, v2, 8n);
function F30(a32, a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a35;
    this.f = 8;
}
const v36 = new F30(8, 5n, "global", "-16");
new F30(8, -7n, "-16", "global", -1, v36);
const v38 = new F30(8, 5n, "global", "global");
if ("function" == v38) {
    new Int16Array(1024);
    new Uint32Array(82);
    new Uint8Array(3558);
} else {
    function F52(a54, a55, a56) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a56;
    }
    const v57 = new F52(F52, "global", "function");
    new F52(v57, "global", "function");
    new F52(v57, "global", "function");
}
