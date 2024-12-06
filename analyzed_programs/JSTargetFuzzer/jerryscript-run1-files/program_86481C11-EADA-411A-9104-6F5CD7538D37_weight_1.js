function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -53358;
    this.a = -53358;
}
const v3 = new F0();
new F0();
new F0();
function f6() {
    return v3;
}
new Float64Array(0);
new Uint16Array(6);
new Uint8ClampedArray(15);
let v16 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v17 = [6,17590];
[-658853788,-256];
let v23 = BigUint64Array;
const v24 = new v23(12);
function f28() {
    return 10000;
}
const v35 = -5534n >= -5534n;
const t22 = 10000;
t22[16] = 10000;
const v36 = 12n && v35;
try { v36.n(); } catch (e) {}
const v41 = -4294967295;
f28();
1 == 1 ? 1 : 1;
const v47 = new Uint32Array(v17);
new Uint8Array(16);
let v52;
try { v52 = v16(-4294967295); } catch (e) {}
({"buffer":v16,"d":v23,"g":v52,...v52} = v24);
const o53 = {
};
new Proxy(v47, o53);
const v59 = Symbol.toPrimitive;
const o63 = {
    [v59]() {
        try {
            super.getUint16();
        } catch(e62) {
        }
        return this;
    },
};
function F70(a72, a73, a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
    a74.d = a75;
    this.f = a72;
}
const v76 = new F70(-4294967296, 5n, "-16", "-16");
new F70(-1, -7n, "-16", "global");
const v78 = new F70(-4294967296, 5n, "global", "global");
"-16" == v78;
if (-1) {
} else {
    function F83(a85, a86, a87) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a87;
    }
    const v88 = new F83(F83, v76, "function");
    const t64 = -1;
    new t64(v88, "global", "function");
    new F83(v88, "global", "function");
}
