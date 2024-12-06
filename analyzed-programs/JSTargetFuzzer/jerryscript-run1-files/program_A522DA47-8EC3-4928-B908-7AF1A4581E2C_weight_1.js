let v3 = 113;
new Uint32Array(v3);
const v6 = [42783,-36101,10];
const v9 = Array(61);
const o10 = {
    __proto__: v9,
};
v6[o10];
let v12 = 48;
new Float32Array(v12);
const v17 = new BigInt64Array(232);
new Uint16Array(0);
const v23 = new Float64Array(1570);
v3 ^= 11;
--v12;
14 in v23;
const o28 = {
};
new Proxy(v17, o28);
new Uint8Array(11);
function F41(a43, a44, a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a46;
    this.f = -4294967296;
}
new F41(-4294967296, 5n, "global", "-16");
new F41(-4294967296, -7n, "-16", "global");
const v49 = new F41(-4294967296, 5n, "global", "global");
if ("function" == v49) {
} else {
    function F54(a56, a57, a58) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a58;
    }
    const v59 = new F54(F54, "global", "function");
    new F54(v59, "global", "function");
    new F54(v59, "global", "function");
}
