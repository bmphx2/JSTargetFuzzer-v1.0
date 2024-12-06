new BigUint64Array(0);
new BigUint64Array(3);
new Uint8Array(255);
function f12(a13, a14) {
    new Int8Array(1);
    new Uint16Array(3);
    new BigUint64Array(0);
    return a13;
}
f12(255, 0);
let v25 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v26 = [6,17590];
[-658853788,-256];
let v32 = BigUint64Array;
const v33 = new v32(12);
const v36 = new Uint32Array(v26);
new Uint8Array(16);
let v41;
try { v41 = v25(-4294967295); } catch (e) {}
({"buffer":v25,"d":v32,"g":v41,...v41} = v33);
const o42 = {
};
new Proxy(v36, o42);
const v48 = Symbol.toPrimitive;
const o52 = {
    [v48]() {
        try {
            super.getUint16();
        } catch(e51) {
        }
        return this;
    },
};
function F59(a61, a62, a63, a64) {
    if (!new.target) { throw 'must be called with new'; }
    a63.d = a64;
    this.f = a61;
}
const v65 = new F59(-4294967296, 5n, "-16", "-16");
new F59(-1, -7n, "-16", "global");
const v67 = new F59(-4294967296, 5n, "global", "global");
"-16" == v67;
if (-1) {
} else {
    function F72(a74, a75, a76) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a76;
    }
    const v77 = new F72(F72, v65, "function");
    const t49 = -1;
    new t49(v77, "global", "function");
    new F72(v77, "global", "function");
}
