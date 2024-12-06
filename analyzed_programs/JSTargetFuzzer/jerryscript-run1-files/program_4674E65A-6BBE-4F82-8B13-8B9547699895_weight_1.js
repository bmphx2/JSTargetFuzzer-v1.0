new Float32Array(1942);
new Int8Array(3118);
new Int16Array(0);
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
    a50.d = a51;
    this.f = a48;
}
const v52 = new F46(-4294967296, 5n, "-16", "-16");
new F46(-1, -7n, "-16", "global");
const v54 = new F46(-4294967296, 5n, "global", "global");
"-16" == v54;
if (-1) {
    [] = "-16";
    try { v35["get"]("get", v54); } catch (e) {}
} else {
    function F64(a66, a67, a68) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a68;
    }
    const v69 = new F64(F64, v52, "function");
    const t44 = -1;
    new t44(v69, "global", "function");
    new F64(v69, "global", "function");
}
