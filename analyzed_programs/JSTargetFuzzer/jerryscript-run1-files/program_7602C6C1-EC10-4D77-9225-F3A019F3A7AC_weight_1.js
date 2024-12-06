new Set();
new Uint8Array(3);
new BigUint64Array(8);
new BigInt64Array(3754);
let v11 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v12 = [6,17590];
[-658853788,-256];
let v18 = BigUint64Array;
const v19 = new v18(12);
const v22 = new Uint32Array(v12);
new Uint8Array(41484);
let v27;
try { v27 = v11(-4294967295); } catch (e) {}
({"buffer":v11,"d":v18,"g":v27,...v27} = v19);
for (; !10;) {
}
const o30 = {
};
new Proxy(v22, o30);
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
    const t45 = -1;
    new t45(v65, "global", "function");
    new F60(v65, "global", "function");
}
