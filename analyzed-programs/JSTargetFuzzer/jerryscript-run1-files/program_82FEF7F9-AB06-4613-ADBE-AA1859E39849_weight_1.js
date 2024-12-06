function f0() {
}
new Set();
f0();
f0();
function f10() {
    return 512;
}
let v15 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v16 = v15.__proto__;
try { v15.some(f10, -1455779699n); } catch (e) {}
const v21 = [6,17590];
const v22 = [-658853788,-256];
let v27 = BigUint64Array;
const v28 = new v27(12);
const v31 = new Uint32Array(v21);
new Uint8Array(16);
let v36;
try { v36 = v22(-4294967295); } catch (e) {}
({"buffer":v15,"d":v27,"g":v36,...v36} = v28);
const o37 = {
};
new Proxy(v31, o37);
Symbol.toPrimitive;
const o53 = {
    [v27]() {
        if (v16) {
        } else {
        }
        try {
            super.getUint16();
        } catch(e52) {
        }
        return this;
    },
};
function F60(a62, a63, a64, a65) {
    if (!new.target) { throw 'must be called with new'; }
    a64.d = a65;
    this.f = a62;
}
const v66 = new F60(-4294967296, 5n, "-16", "-16");
new F60(-1, -7n, "-16", "global");
const v68 = new F60(-4294967296, 5n, "global", "global");
"-16" == v68;
if (-1) {
} else {
    function F73(a75, a76, a77) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = Set;
    }
    const v78 = new F73(F73, v66, "-16");
    const t52 = -1;
    new t52(v78, v36, "function");
    new F73(v78, "global", "function");
}
