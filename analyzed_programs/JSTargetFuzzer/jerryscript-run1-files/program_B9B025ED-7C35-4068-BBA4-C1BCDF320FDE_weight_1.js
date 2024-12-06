function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = [4.0,585.4254908683372,1000000000.0,-1000000000000.0,-1.0,0.6537834056952333,2.8414523441604373e+307];
const v9 = new Uint32Array(3164);
new Proxy(v6, v9);
new Int32Array(750);
new Uint8ClampedArray(247);
new BigInt64Array(4);
let v24 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v25 = [6,17590];
[-658853788,-256];
let v31 = BigUint64Array;
const v32 = new v31(12);
const v35 = new Uint32Array(v25);
new Uint8Array(16);
class C39 {
    constructor(a41) {
        return arguments;
    }
}
let v44;
try { v44 = v24(-4294967295); } catch (e) {}
({"buffer":v24,"d":v31,"g":v44,...v44} = v32);
const o45 = {
};
new Proxy(v35, o45);
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
function F62(a64, a65, a66, a67) {
    if (!new.target) { throw 'must be called with new'; }
    a66.d = a67;
    this.f = a64;
}
const v68 = new F62(-4294967296, 5n, "-16", "-16");
new F62(-1, -7n, "-16", "global");
const v70 = new F62(-4294967296, 5n, "global", "global");
"-16" == v70;
if (-1) {
} else {
    function F75(a77, a78, a79) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a79;
    }
    const v80 = new F75(F75, v68, "function");
    const t53 = -1;
    new t53(v80, "global", "function");
    new F75(v80, "global", "function");
}
