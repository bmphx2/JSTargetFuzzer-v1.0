new Uint8Array(41);
const v5 = new Float32Array(1000);
new Uint16Array(295);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 41;
    this.g = a14;
    this.c = Uint8Array;
}
new F9(v5, 295, 295, 41);
new F9(Uint16Array, 295, 295, 41);
new F9(41, 41, 1000, 41);
let v18 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v19 = [6,17590];
[-658853788,-256];
let v25 = BigUint64Array;
const v26 = new v25(12);
const v29 = new Uint32Array(v19);
new Uint8Array(16);
let v34;
try { v34 = v18(-4294967295); } catch (e) {}
({"buffer":v18,"d":v25,"g":v34,...v34} = v26);
const o35 = {
};
new Proxy(v29, o35);
const v41 = Symbol.toPrimitive;
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
    this.f = a54;
}
new F52(-4294967296, 5n, "-16", "-16");
new F52(-1, -7n, "-16", "global");
const v60 = new F52(-4294967296, 5n, "global", "global");
"-16" == v60;
if (-1) {
} else {
    function F65(a67, a68, a69) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a69;
    }
    const v70 = new F65(F65, 16, "function");
    const t51 = -1;
    new t51(v70, "global", "function");
    new F65(v70, "global", "function");
}
