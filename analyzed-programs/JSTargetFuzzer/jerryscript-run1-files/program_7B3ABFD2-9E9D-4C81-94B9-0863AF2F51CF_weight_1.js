function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4294967297;
    this.a = 4294967297;
    this.c = 4294967297;
}
new F0();
new F0();
const v5 = new F0();
const v6 = [F0,F0];
const v7 = [v5,v6,v6,v6,F0];
[v7,v5,F0];
let v12 = [-2126497706,536870888,-29392,6,-631391670,0,6];
[-9,4096,-9007199254740990,13];
[8,65535,-793694354,536870912];
+null;
let v17 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v18 = [6,17590];
[-658853788,-256];
const v25 = new URIError(12);
const v28 = new Uint32Array(v18);
new Uint8Array(v7);
let v33;
try { v33 = v17(-4294967295); } catch (e) {}
({"buffer":v17,"d":v12,"g":v33,...v33} = v25);
const o34 = {
};
new Proxy(v28, F0);
Symbol.toPrimitive;
const o44 = {
    [12]() {
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
new F51(-4294967296, 5n, "-16", "-16");
new F51(-1, -7n, "-16", 8n);
const v59 = new F51(-4294967296, 5n, "global", "global");
"-16" == v59;
if (-1) {
} else {
    function F64(a66, a67, a68) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a68;
    }
    const v69 = new F64(F64, F64, "function");
    const t54 = -1;
    new t54(v69, "global", "function");
    new F64(v69, "global", "function");
}
