[];
const v3 = new BigUint64Array(4096);
const v6 = new Uint32Array(0);
const v9 = new Float32Array(16);
const v11 = [[16,4096,v9,v9],v6,Uint32Array];
v9.buffer ^= 0;
let [,v12] = v9;
v12[7] = 0;
try { v3.entries(); } catch (e) {}
[4096];
[v6,v6,4096,BigUint64Array,v11];
let v16 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v17 = [6,17590];
[-658853788,-256];
let v23 = BigUint64Array;
const v24 = new v23(12);
const v27 = new Uint32Array(v17);
new Uint8Array(16);
let v32;
try { v32 = v16(-4294967295); } catch (e) {}
({"buffer":v16,"d":v23,"g":v32,...v32} = v24);
const o33 = {
};
new Proxy(v27, o33);
const v39 = Symbol.toPrimitive;
const o43 = {
    [v39]() {
        try {
            super.getUint16();
        } catch(e42) {
        }
        return this;
    },
};
function F50(a52, a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    a54.d = a55;
    this.f = a52;
}
const v56 = new F50(-4294967296, 5n, "-16", "-16");
new F50(-1, -7n, "-16", "global");
const v58 = new F50(-4294967296, 5n, "global", "global");
"-16" == v58;
if (-1) {
} else {
    function F63(a65, a66, a67) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a67;
    }
    const v68 = new F63(F63, v56, "function");
    const t50 = -1;
    new t50(v68, "global", "function");
    new F63(v68, "global", "function");
}
