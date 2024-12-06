function f0() {
}
function f1() {
    return f0;
}
const v6 = new WeakSet();
let v7 = [v6];
[f1,f1];
[3,v7];
let v10 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v11 = [48351,-44182,0,127,-4294967297,7,2147483648,6,1042964589];
[-658853788,-256];
Math.sqrt(4294967297);
v7--;
const v22 = 4294967297 >> v10;
Math.cosh(4294967297);
v22 / 4294967297;
Math.clz32(v7);
let v26 = BigUint64Array;
const v27 = new v26(12);
const v30 = new Uint32Array(v11);
new Uint8Array(16);
let v35;
try { v35 = v10(-4294967295, WeakSet); } catch (e) {}
({"buffer":v10,"d":v26,"g":v35,...v35} = v27);
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
        return this;
    },
};
function F53(a55, a56, a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    a57.d = a58;
    this.f = a55;
}
const v59 = new F53(-4294967296, 5n, "-16", "-16");
new F53(-1, -7n, "-16", "global");
const v61 = new F53(-4294967296, 5n, "global", "global");
"-16" == v61;
if (-1) {
} else {
    function F66(a68, a69, a70) {
        if (!new.target) { throw 'must be called with new'; }
        F66.c = a70;
    }
    const v71 = new F66(F66, v59, "function");
    const t54 = -1;
    new t54(v71, "global", "function");
    new F66(v71, "global", "function");
}
