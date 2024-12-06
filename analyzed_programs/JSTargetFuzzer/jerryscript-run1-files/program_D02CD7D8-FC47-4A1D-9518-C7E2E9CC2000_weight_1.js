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
const o28 = {
};
new Proxy(v22, o28);
const v34 = Symbol.toPrimitive;
const o38 = {
    [v34]() {
        try {
            super.getUint16();
        } catch(e37) {
        }
        return this;
    },
};
function F45(a47, a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    a49.d = a50;
    this.f = a47;
}
const v51 = new F45(-4294967296, 5n, "-16", "-16");
new F45(-1, -7n, "-16", "global");
const v53 = new F45(-4294967296, 5n, "global", "global");
"-16" == v53;
if (-1) {
} else {
    function F58(a60, a61, a62) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a62;
    }
    const v63 = new F58(F58, v51, "function");
    const t43 = -1;
    new t43(v63, "global", "function");
    new F58(v63, "global", "function");
}
