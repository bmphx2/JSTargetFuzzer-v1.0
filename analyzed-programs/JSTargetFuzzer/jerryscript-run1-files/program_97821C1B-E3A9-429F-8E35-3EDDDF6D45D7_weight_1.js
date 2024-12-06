const v3 = [61388,9007199254740990,61388,9007199254740990];
const v4 = [16,61388,v3,v3,v3];
const v5 = [16,61388,9007199254740990,v4,16];
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = "c";
    this.d = a12;
    this.e = v4;
}
new F10(9007199254740990, v4, 16);
new F10(16, v4, 16);
new F10(61388, v5, 16);
let v18 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v19 = [6,17590];
const v20 = [-658853788,-256];
let v25 = BigUint64Array;
const v26 = new v25(12);
const v29 = new Uint32Array(v19);
const v32 = new Uint8Array(16);
let v34;
try { v34 = v18(-4294967295); } catch (e) {}
({"buffer":v18,"d":v25,"g":v34,...v34} = v26);
const o35 = {
};
new Proxy(v29, o35);
const v41 = Symbol.toPrimitive;
const o45 = {
    [v41]() {
        try {
            super.getUint16();
        } catch(e44) {
        }
        return F10;
    },
};
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    a56.d = a57;
    this.f = a54;
}
const v58 = new F52(-4294967296, 5n, "-16", "-16");
const v59 = new F52(-1, -7n, "-16", "global");
const v60 = new F52(-4294967296, 5n, "global", v59);
"-16" == v60;
if (-1) {
    v20[-65535] = 255;
    v32.d = "function";
} else {
    function F68(a70, a71, a72) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a72;
    }
    const v73 = new F68(F68, v58, "function");
    new v73(v73, "global", "function");
    new F68(v73, "global", "function");
}
