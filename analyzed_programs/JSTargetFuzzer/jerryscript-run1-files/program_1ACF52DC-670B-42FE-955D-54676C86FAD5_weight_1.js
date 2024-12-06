new Int32Array(0);
const v5 = new BigUint64Array(113);
const v8 = new Uint8ClampedArray(1316);
delete v5[8n];
typeof 1073741824n === "bigint";
let v22;
try { v22 = v5.join("bigint"); } catch (e) {}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    v5.d = a31;
    let v32 = 0;
    while (v32 < 2) {
        [] = v22;
        v32++;
    }
    v8.f = -4294967296;
}
new F26(-4294967296, 5n, "global", "-16");
new F26(-4294967296, 1073741824n, "global", "global");
const v38 = new F26(-4294967296, 5n, "global", "global");
if ("function" == v38) {
} else {
    function F43(a45, a46, a47) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a47;
    }
    const v48 = new F43(F43, "global", "function");
    new F43(v48, "global", "function", 40545);
    new F43(v48, "global", "function");
}
