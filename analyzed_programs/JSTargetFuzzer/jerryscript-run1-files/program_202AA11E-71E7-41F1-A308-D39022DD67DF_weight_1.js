function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.a = 29106n;
}
new F9(-14031, 29106n);
new F9(-2, 2147483647n);
new F9(-2147483649, 29106n);
let v19 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v20 = [6,17590];
const v21 = [-658853788,-256];
let v26 = BigUint64Array;
const v27 = new v26(12);
const v30 = new Uint32Array(v20);
new Uint8Array(16);
let v35;
try { v35 = v19(-4294967295); } catch (e) {}
({"buffer":v19,"d":v26,"g":v35,...v35} = v27);
const o36 = {
};
new Proxy(v30, o36);
const v42 = Symbol.toPrimitive;
const o46 = {
    [v42]() {
        try {
            super.getUint16();
        } catch(e45) {
        }
        return v21;
    },
};
function F53(a55, a56, a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    a55.d = a58;
    this.f = a55;
}
const v59 = new F53(-4294967296, 5n, "-16", "-16");
new F53(-1, -7n, "-16", "global");
const v61 = new F53(-4294967296, 5n, "global", "global");
"-16" == v61;
if (-4294967295) {
} else {
    function F66(a68, a69, a70) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a70;
    }
    const v71 = new F66(F66, v59, "function");
    const t47 = -1;
    new t47(v71, "global", "function");
    new F66(v71, "global", "function");
}
