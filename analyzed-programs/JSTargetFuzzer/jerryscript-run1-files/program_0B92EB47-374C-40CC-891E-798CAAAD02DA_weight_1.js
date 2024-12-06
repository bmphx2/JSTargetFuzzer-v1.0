let v3 = 113;
new Uint32Array(v3);
let v6 = 48;
new Float32Array(v6);
const v11 = new BigInt64Array(232);
new Uint16Array(0);
const v17 = new Float64Array(1570);
v3 ^= 11;
--v6;
14 in v17;
const o22 = {
};
new Proxy(v11, o22);
new Uint8Array(11);
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a40;
    this.f = -4294967296;
}
new F35(-4294967296, 5n, "global", "-16");
new F35(-4294967296, -7n, "-16", "global");
const v43 = new F35(-4294967296, 5n, "global", "global");
if ("function" == v43) {
} else {
    function F48(a50, a51, a52) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a52;
    }
    const v53 = new F48(F48, "global", "function");
    new F48(v53, "global", "function");
    new F48(v53, "global", "function");
}
