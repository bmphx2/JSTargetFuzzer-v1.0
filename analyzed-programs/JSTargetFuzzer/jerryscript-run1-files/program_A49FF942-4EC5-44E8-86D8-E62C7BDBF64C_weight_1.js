function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 7;
    this.a = 7;
    this.c = 7;
}
new F0();
new F0();
const v5 = new F0();
try { v5.stringify(); } catch (e) {}
[-Infinity,-125280.14723167627,148223.6812462064,4.2194706896081837e+307,-5.0,291.0702745718297,-1.7976931348623157e+308,-2.2250738585072014e-308];
[1.7716984548125724e+308,-7.134158646029909,-576.6358173283943,-1.0,400.09019438634164,1000000000.0];
const v18 = [-1000000000000.0,-959092.5965502696,631874.0602537456,-4.0,Infinity];
new Float32Array(240);
new Uint8ClampedArray(64);
new Uint32Array(2);
const v29 = new Date();
const v30 = [8,-34566,-1073741824];
v29 + v18;
const o32 = {
    __proto__: v30,
    "a": v18,
    44: Float32Array,
};
