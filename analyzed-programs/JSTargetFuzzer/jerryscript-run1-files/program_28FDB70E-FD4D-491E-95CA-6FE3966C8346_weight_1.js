const v11 = new Uint32Array(4);
new Uint8ClampedArray(257, 1024, v11);
const v17 = new Uint16Array(10);
function F27(a29, a30, a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a32;
    this.f = -4294967296;
}
new F27(-4294967296, -40153n, "global", "iterator");
new F27(-4294967296, -7n, "iterator", "global");
const v35 = new F27(-4294967296, -40153n, "global", "global");
if ("function" == v35) {
} else {
    function F40(a42, a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a44;
    }
    const v45 = new F40(F40, "global", "function", v17);
    new F40(v45, "global", "function", F40);
    new F40(v45, "global", "function");
}
