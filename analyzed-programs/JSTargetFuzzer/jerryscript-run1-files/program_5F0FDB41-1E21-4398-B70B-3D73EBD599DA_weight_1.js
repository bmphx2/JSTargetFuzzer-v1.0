new Map();
new Uint8Array(179);
new BigUint64Array(376);
new Int8Array(18649);
[4096,405204803,4096,9,6,-9007199254740991,14,-43697,-39937,2];
[-1543065062,1073741825,-29133487,-50099,-12,-2147483649,-1024,-42496,3];
[512,12,-4,-17019,129];
let v17 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v18 = [6,17590];
[-658853788,-256];
let v24 = BigUint64Array;
const v25 = new v24(12);
const v28 = new Uint32Array(v18);
new Uint8Array(16);
let v33;
try { v33 = v17(-4294967295, v25); } catch (e) {}
({"buffer":v17,"d":v24,"g":v33,...v33} = v25);
const o34 = {
};
new Proxy(v28, o34);
const v40 = Symbol.toPrimitive;
const o44 = {
    [v40]() {
        try {
            super.getUint16();
        } catch(e43) {
        }
        return this;
    },
};
function F51(a53, a54, a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    a55.d = a56;
    this.f = a53;
}
const v57 = new F51(-4294967296, 5n, "-16", "-16");
new F51(-1, -7n, "-16", "global");
const v59 = new F51(-4294967296, 5n, "global", "global");
"-16" == v59;
if (-1) {
} else {
    function F64(a66, a67, a68) {
        if (!new.target) { throw 'must be called with new'; }
        this.unscopables = a68;
    }
    const v69 = new F64(F64, v57, "function");
    const t46 = -1;
    new t46(v69, "global", "function");
    new F64(v69, "global", "function");
}
