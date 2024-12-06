function f0() {
}
new Uint8Array(926);
new BigInt64Array(1000);
new Int8Array(1000);
let v13 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v14 = [6,17590];
[-658853788,-256];
let v20 = BigUint64Array;
const v21 = new v20(12);
const v24 = new Uint32Array(v14);
new Uint8Array(16);
let v29;
try { v29 = v13(-4294967295); } catch (e) {}
({"buffer":v13,"d":v20,"g":v29,...v29} = v21);
const o30 = {
};
new Proxy(v24, o30);
const v36 = Symbol.toPrimitive;
const o40 = {
    [v36]() {
        try {
            super.getUint16();
        } catch(e39) {
        }
        return this;
    },
};
function F47(a49, a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    a51.d = a52;
    this.f = a49;
}
const v53 = new F47(-4294967296, 5n, "-16", "-16");
new F47(-1, -7n, "-16", "global");
const v55 = new F47(-4294967296, 5n, "global", "global");
"-16" == v55;
if (-1) {
} else {
    function F60(a62, a63, a64) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a64;
    }
    const v65 = new F60(F60, v53, "function");
    const t44 = 1000;
    new t44(v65, "global", "function");
    new F60(v65, "global", "function");
}
