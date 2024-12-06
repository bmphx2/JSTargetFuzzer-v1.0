function f0() {
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a10;
    this.c = 883056.2337510381;
}
const v12 = new F7(15, 2.2250738585072014e-308, 2.2250738585072014e-308);
const v13 = new F7(1, 2.2250738585072014e-308, 883056.2337510381);
const v14 = new F7(15, 883056.2337510381, 2.2250738585072014e-308);
function f16(a17, a18, a19) {
    Object.defineProperty(a18, a17, { configurable: true, set: f0 });
    return v13;
}
f16(2.2250738585072014e-308, v12, v13);
new Map();
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a25;
}
new F23(v14, 9.430282926715797);
new F23(v13, 883056.2337510381);
new F23(v12, 9.430282926715797);
let v30 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v31 = [6,17590];
[-658853788,-256];
let v37 = BigUint64Array;
const v38 = new v37(12);
const v41 = new Uint32Array(v31);
new Uint8Array(16);
let v46;
try { v46 = v30(-4294967295); } catch (e) {}
({"buffer":v30,"d":v37,"g":v46,...v46} = v38);
const o47 = {
};
const v49 = new Proxy(v41, o47);
v49.toPrimitive;
const o57 = {
    [2.2250738585072014e-308]() {
        try {
            super.getUint16();
        } catch(e56) {
        }
        return v37;
    },
};
function F64(a66, a67, a68, a69) {
    if (!new.target) { throw 'must be called with new'; }
    a68.d = a69;
    this.f = this;
}
const v70 = new F64(-4294967296, 5n, "-16", "-16");
new F64(-1, -7n, "-16", "global");
const v72 = new F64(-4294967296, 5n, "global", "global");
"-16" == v72;
if (-4294967295) {
} else {
    function F77(a79, a80, a81) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a81;
    }
    const v82 = new F77(F77, v70, "function");
    const t62 = -1;
    new t62(v82, "global", "function");
    new F77(v82, "global", "function");
}
