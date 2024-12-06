function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
    this.g = a9;
    this.b = a11;
}
const v12 = new F6("bigint", "3v", "bigint", 536870888);
new F6("length", v12, "length", 11);
new F6("length", "3v", "length", 536870887);
new Uint8ClampedArray(117);
new Uint8Array(2843);
new Int8Array(4);
new BigInt64Array(256);
const v32 = new Uint32Array(227);
new Uint16Array(129);
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a39;
}
new F36(256, 129);
new F36(v32, 227);
new F36(v32, 11);
function f43() {
}
const v47 = [5.409837218751631e+306,5.0,0.631320185332836,-1.0,-697.5426783793084,-235222.86486059672,0.06240438650725588,-2.0,0.3995307120555006,2.2250738585072014e-308];
try { v47.filter(); } catch (e) {}
let v51 = new BigUint64Array(3258);
class C52 extends Set {
    constructor(a54, a55, a56) {
        super();
        eval();
        v51++;
    }
}
new C52();
new Uint8Array(227);
let v72 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v72);
v72 /= v72;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
