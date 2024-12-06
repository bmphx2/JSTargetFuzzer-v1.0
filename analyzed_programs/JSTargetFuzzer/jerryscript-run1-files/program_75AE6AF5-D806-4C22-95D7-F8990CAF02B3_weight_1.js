new WeakSet();
new Int32Array(512);
new Uint8Array(26);
new Uint8Array(4);
let v17 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v18 = [6,17590];
[-658853788,-256];
let v24 = BigUint64Array;
const v25 = new v24(12);
const v28 = new Uint32Array(v18);
new Uint8Array(16);
let v33;
try { v33 = v17(-4294967295); } catch (e) {}
({"buffer":v17,"d":v24,"g":v33,...v33} = v25);
const o34 = {
};
new Proxy(v28, o34);
function f37(a38, a39) {
    'use strict';
    for (let i41 = 0; i41 < 7;) {
    }
    return a39;
}
const v49 = Symbol.toPrimitive;
const o53 = {
    [v49]() {
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
        this.c = a77;
    }
    const v78 = new F73(F73, v66, "function");
    const t49 = -1;
    new t49(v78, "global", "function");
    new F73(v78, "global", "function");
}
