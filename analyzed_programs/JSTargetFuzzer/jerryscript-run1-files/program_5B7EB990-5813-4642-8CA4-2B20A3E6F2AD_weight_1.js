function f0() {
}
new Int8Array(4);
new Int32Array(28937);
const v9 = new Int16Array(4079);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4079;
}
const v16 = new F10(28937, 4079, 28937, 4);
new F10(4, 28937, f0, 4079, v9, v16, v16);
new F10(4079, 4, 4079, 4);
new Array(9, Int32Array, 9);
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a36;
    this.f = -4294967296;
}
new F31(-4294967296, 5n, "global", "-16");
new F31(-4294967296, -5n, "-16", "global");
const v39 = new F31(-4294967296, 5n, "global", "global");
if ("function" == v39) {
} else {
    function F44(a46, a47, a48) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a48;
    }
    const v49 = new F44(F44, "global", "function");
    new F44(v49, "global", "function");
    new F44(v49, "global", "function");
}
