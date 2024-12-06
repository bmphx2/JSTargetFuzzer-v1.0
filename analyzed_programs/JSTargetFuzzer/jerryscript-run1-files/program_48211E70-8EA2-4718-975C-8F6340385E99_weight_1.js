function f0() {
}
new Int8Array(4);
new Int32Array(28937);
const v9 = new Int16Array(4079);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4079;
}
const v16 = new F10(4, 4079, 28937, 4);
new F10(4, 28937, f0, 4079, v9, v16, v16);
new F10(4079, 4, 4079, 4);
const v21 = new Array(9, Int32Array, 9);
async function* f27(a28, a29) {
    return a29;
}
f27();
const v33 = ("n").matchAll("n");
try { ("a").codePointAt(v33); } catch (e) {}
function F39(a41, a42, a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967296;
    this.b = -4294967296;
}
new F39(-4294967296, 5n, "global", "-16");
new F39(-4294967296, -5n, "-16", "global");
const v47 = new F39(-4294967296, 5n, "global", "global");
if ("function" >= v47) {
} else {
    function F52(a54, a55, a56) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a56;
    }
    const v57 = new F52(F52, "global", "function", v21);
    new F52(v57, "global", "function", v57);
    new F52(v57, "function", "function");
}
