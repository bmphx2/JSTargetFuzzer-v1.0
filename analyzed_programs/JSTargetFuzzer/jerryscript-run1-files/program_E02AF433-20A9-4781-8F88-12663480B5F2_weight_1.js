new Uint32Array(2559);
new Float32Array(134);
new Uint8ClampedArray(128);
[30703,268435456,1431980405,-4294967297,-1091821632];
[55116,4294967296,-9007199254740991];
[58585,512,64060,65536,-42096];
let v15 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v16 = [6,17590];
[-658853788,-256];
let v22 = BigUint64Array;
const v23 = new v22(12);
const v26 = new Uint32Array(v16);
new Uint8Array(16);
let v31;
try { v31 = v15(-4294967295); } catch (e) {}
({"buffer":v15,"d":v22,"g":v31,...v31} = v23);
v26.length = 8;
function f32() {
    return v26;
}
const o36 = {
};
new Proxy(v26, o36);
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
new F53(-1, -7n, "-16", "global", 16);
const v61 = new F53(-4294967296, 5n, "global", "global");
"-16" == v61;
if (-1) {
} else {
    function F66(a68, a69, a70) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a70;
    }
    const v71 = new F66(F66, v59, "function");
    const t49 = -1;
    new t49(v71, "global", "function");
    new F66(v71, "global", "function");
}
