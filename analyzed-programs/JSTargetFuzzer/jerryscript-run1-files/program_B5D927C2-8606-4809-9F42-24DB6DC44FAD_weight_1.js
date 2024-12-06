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
const v7 = [v5,v6,v6,v6];
[v7,v5,F0];
let v12 = [-2126497706,536870888,-29392,6,-631391670,0,6];
[-9,4096,-9007199254740990,13];
[8,65535,-793694354,536870912];
let v15 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v16 = [6,17590];
[-658853788,-256];
const v23 = new BigUint64Array(12);
const v26 = new Uint32Array(v16);
new Uint8Array(v7);
let v31;
try { v31 = v15(-4294967295); } catch (e) {}
({"buffer":v15,"d":v12,"g":v31,...v31} = v23);
const o32 = {
};
new Proxy(v26, F0);
Symbol.toPrimitive;
const o42 = {
    [12]() {
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
new F49(-4294967296, 5n, "-16", "-16");
new F49(-1, -7n, "-16", 8n);
const v57 = new F49(-4294967296, 5n, "global", "global");
"-16" == v57;
if (-1) {
} else {
    function F62(a64, a65, a66) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a66;
    }
    const v67 = new F62(F62, F62, "function");
    const t53 = -1;
    new t53(v67, "global", "function");
    new F62(v67, "global", "function");
}
