new Int16Array(7);
const v5 = new Int32Array(512);
new BigInt64Array(16);
[Int32Array,[v5,[Int32Array,v5,7,Int32Array,v5],Int32Array],16];
let v12 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v13 = [6,17590];
[-658853788,-256];
let v19 = BigUint64Array;
const v20 = new v19(12);
const v23 = new Uint32Array(v13);
new Uint8Array(16);
let v28;
try { v28 = v12(-4294967295); } catch (e) {}
({"buffer":v12,"d":v19,"g":v28,...v28} = v20);
const o29 = {
};
new Proxy(v23, o29);
const v35 = Symbol.toPrimitive;
const o39 = {
    [v35]() {
        try {
            super.getUint16();
        } catch(e38) {
        }
        return this;
    },
};
function F46(a48, a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    a48.d = a51;
    this.f = a48;
}
const v52 = new F46(-4294967296, 5n, "-16", "-16");
new F46(-1, -7n, "-16", "global");
const v54 = new F46(-4294967296, 5n, "global", "global");
"-16" == v54;
if (Int32Array) {
} else {
    function F59(a61, a62, a63) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a63;
    }
    const v64 = new F59(F59, v52, "function");
    const t43 = -1;
    new t43(v64, "global", "function");
    new F59(v64, "global", 16);
}
