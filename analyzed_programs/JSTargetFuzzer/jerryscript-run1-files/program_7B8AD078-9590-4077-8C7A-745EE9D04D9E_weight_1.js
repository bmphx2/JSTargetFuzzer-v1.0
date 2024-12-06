const v3 = [8n,65536n];
const v5 = [8n,v3,v3,256n,[65536n,v3,65536n,65536n,v3]];
new WeakSet();
function f11(a12, a13, a14, a15) {
    return 11188;
}
f11(v5, v3, 256n, 65536n);
[5.0,2.0,0.0];
[1.7976931348623157e+308,-Infinity,1.5357644147360462e+308,-7.008236490670463e+307,NaN,-78.22924219432355,-974123.4147616576,3.736237644160393e+307];
const v20 = [2.220446049250313e-16,1000000.0,0.5850494267176573];
let v21 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v22 = [6,17590];
[-658853788,-256];
let v28 = BigUint64Array;
const v29 = new v28(12);
const v32 = new Uint32Array(v22);
new Uint8Array(16);
let v37;
try { v37 = v21(-4294967295); } catch (e) {}
({"buffer":v21,"d":v28,"g":v37,...v37} = v29);
const o38 = {
};
const o41 = {
    "maxByteLength": 9,
};
const v43 = new ArrayBuffer(7, o41);
new DataView(v43);
new Proxy(v32, o38);
const v51 = Symbol.toPrimitive;
const o55 = {
    [v51]() {
        try {
            super.getUint16();
        } catch(e54) {
        }
        return this;
    },
};
function f60(a61, a62) {
    'use strict';
    f11(o38, o55, v28, 65536n);
    o41[4];
    return a62;
}
f60(v20, v43);
function F69(a71, a72, a73, a74) {
    if (!new.target) { throw 'must be called with new'; }
    a73.d = a74;
    this.f = a71;
}
const v75 = new F69(-4294967296, 5n, "-16", "-16");
new F69(-1, -7n, "-16", "global");
const v77 = new F69(-4294967296, 5n, "global", "global");
"-16" == v77;
if (-1) {
} else {
    function F82(a84, a85, a86) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a86;
    }
    const v87 = new F82(F82, v75, "function");
    const t61 = -1;
    new t61(v87, "global", "function");
    new F82(v87, "global", "function");
}
