function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 36290;
    this.h = 36290;
}
new F0();
new F0();
new F0();
[16044,2147483647,9,-1532229618,-9007199254740991,0,31057,128,-9];
[2147483648,-12491,4,4096];
[-11,257,-2147483647];
new Uint8ClampedArray(64);
new Uint16Array(3592);
new Uint16Array(6);
let v18 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v19 = [6,17590];
[-658853788,-256];
let v25 = BigUint64Array;
const v26 = new v25(12);
const v29 = new Uint32Array(v19);
new Uint8Array(16);
let v34;
try {
const t0 = 193;
v34 = t0(-4294967295);
} catch (e) {}
({"buffer":v18,"d":v25,"g":v34,...v34} = v26);
const o35 = {
};
new Proxy(v29, o35);
const v41 = v18.toPrimitive;
const o45 = {
    [v41]() {
        try {
            super.getUint16();
        } catch(e44) {
        }
        return this;
    },
};
function F52(a54, a55, a56, a57) {
    if (!new.target) { throw 'must be called with new'; }
    a56.d = a57;
    this.f = "global";
}
const v58 = new F52(-4294967296, 5n, "-16", "-16");
new F52(-1, -7n, "-16", "global");
const v60 = new F52(-4294967296, 5n, "global", "global");
"-16" == v60;
if (-1) {
} else {
    function F65(a67, a68, a69) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a69;
    }
    const v70 = new F65(F65, v58, "function");
    const t56 = -1;
    new t56(v70, v29, "function");
    new F65(v70, "global", "function");
}
