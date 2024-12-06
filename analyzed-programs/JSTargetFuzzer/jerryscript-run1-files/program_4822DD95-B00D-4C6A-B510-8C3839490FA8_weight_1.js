new Int16Array(7);
const v5 = new Int32Array(512);
new BigInt64Array(16);
[Int32Array,[v5,[Int32Array,v5,7,Int32Array,v5],Int32Array],16];
let v12 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v13 = [6,17590];
[-658853788,-256];
let v25 = BigUint64Array;
const v26 = new v25(12);
const v29 = new Uint32Array(v13);
new Uint8Array(16);
let v34;
try { v34 = v12(-4294967295); } catch (e) {}
({"buffer":v12,"d":v25,"g":v34,...v34} = v26);
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
        return this;
    },
};
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    a54.d = a57;
    this.f = a54;
}
const v58 = new F52(-4294967296, 5n, "-16", "-16");
new F52(-1, -7n, "-16", "global");
const v60 = new F52(-4294967296, 5n, "global", "global");
"-16" == v60;
if (Int32Array) {
} else {
    function F65(a67, a68, a69) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a69;
    }
    const v70 = new F65(F65, v58, "function");
    const t43 = -1;
    new t43(v70, "global", "function");
    new F65(v70, "global", 16);
}
