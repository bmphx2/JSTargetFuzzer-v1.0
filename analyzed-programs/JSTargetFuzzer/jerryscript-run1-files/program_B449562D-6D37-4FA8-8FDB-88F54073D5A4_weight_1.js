[42761,-9007199254740991,10,16,-268435456];
[1024,-536870912,-4096];
[-1744001811,268435441,256,1073741824,65536];
new Array(512);
new Float64Array(15);
new Uint8Array(127);
new Uint8Array(255);
let v15 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v16 = [6,17590];
[-658853788,-256];
let v22 = BigUint64Array;
const v23 = new v22(12);
const v26 = new Uint8Array(v16);
new Uint8Array(16);
let v31;
try { v31 = v15(-4294967295); } catch (e) {}
({"buffer":v15,"d":v22,"g":v31,...v31} = v23);
const o32 = {
};
new Proxy(v26, o32);
const v38 = Symbol.toPrimitive;
const o42 = {
    [v38]() {
        try {
            super.getUint16();
        } catch(e41) {
        }
        return this;
    },
};
function F49(a51, a52, a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    a53.d = a54;
    this.f = a51;
}
const v55 = new F49(-4294967296, 5n, "-16", "-16");
new F49(-1, -7n, "-16", "global");
const v57 = new F49(-4294967296, 5n, "global", "global");
"-16" == v57;
if (-1) {
} else {
    function F62(a64, a65, a66) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a66;
    }
    const v67 = new F62(F62, v55, "function");
    const t46 = -1;
    const v68 = new t46(v67, "global", "function");
    new F62(v67, "global", v68);
}
