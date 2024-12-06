const v5 = new BigUint64Array(257);
-1207823418 - v5;
let v8;
try { v8 = v5.toString(); } catch (e) {}
v8[1024] = v8;
[] = v5;
v8[257] = 257;
new Int8Array(255);
new Uint32Array(187);
let v14 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v15 = [6,17590];
[-658853788,-256];
let v21 = BigUint64Array;
const v22 = new v21(12);
const v25 = new Uint32Array(v15);
new Uint8Array(16);
let v30;
try { v30 = v14(-4294967295); } catch (e) {}
({"buffer":v14,"d":v21,"g":v30,...v30} = v22);
const o31 = {
};
new Proxy(v25, o31);
const v37 = Symbol.toPrimitive;
const o41 = {
    [v37]() {
        try {
            super.getUint16();
        } catch(e40) {
        }
        return this;
    },
};
function F48(a50, a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    a52.d = a53;
    this.f = a50;
}
const v54 = new F48(-4294967296, 5n, "-16", "-16");
new F48(-1, -7n, "-16", "global");
const v56 = new F48(-4294967296, 5n, "global", "global");
"-16" == v56;
if (-1) {
} else {
    function F61(a63, a64, a65) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a65;
    }
    const v66 = new F61(F61, v54, "function");
    const t48 = -1;
    new t48(v66, "global", "function");
    new F61(v66, "global", "function");
}
