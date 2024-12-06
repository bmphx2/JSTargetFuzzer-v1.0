function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 536870888;
    this.h = 536870888;
    this.c = 536870888;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v11 = new Int32Array(0);
new Float32Array(128);
const v17 = new Int16Array(4);
let v18 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v19 = [6,17590];
const v20 = [-658853788,-256];
let v25 = BigUint64Array;
v5[v11] = v19;
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a30;
}
new F26(v4, v18, -3.0);
new F26(v5, v18, 125.41192631053241);
new F26(v3, v18, 1.7976931348623157e+308);
const v34 = new v25(12);
const v37 = new Uint32Array(v19);
new Uint8Array(16);
let v42;
try { v42 = v18(-4294967295); } catch (e) {}
({"buffer":v18,"d":v25,"g":v42,...v42} = v34);
const o43 = {
};
new Proxy(v37, o43);
const v49 = Symbol.toPrimitive;
const o63 = {
    [v49]() {
        try {
            super.getUint16();
            Object.defineProperty(v20, 1073741824, { configurable: true, enumerable: true, get: Symbol, set: Symbol });
            const o57 = {
                "maxByteLength": 2488,
            };
            const v59 = new SharedArrayBuffer(2488, o57);
            new Int32Array(v59);
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
        v17.c = a87;
    }
    const v88 = new F83(F83, v76, "function");
    const t65 = -1;
    const v89 = new t65(v88, "global", "function");
    new F83(v88, v89, "function");
}
