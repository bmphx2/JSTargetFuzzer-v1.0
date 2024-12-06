function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 536870888;
    this.d = 536870888;
    this.a = 536870888;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function f9() {
    return v5;
}
new WeakSet([[Int32Array,Int32Array,Int32Array]]);
const v16 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
new Int32Array(3004);
const o19 = {
    "h": v16,
};
class C20 extends F0 {
    static o(a22, a23, a24) {
        const v25 = v3[-2];
        const o26 = {
            "apply": f9,
            "call": f9,
            "construct": f9,
            "defineProperty": f9,
            "getOwnPropertyDescriptor": f9,
            "getPrototypeOf": f9,
            "has": f9,
            "isExtensible": f9,
            "ownKeys": f9,
            "preventExtensions": f9,
            "set": f9,
            "setPrototypeOf": f9,
        };
        new Proxy(v3, o26);
        return v25;
    }
}
new C20();
new C20();
new C20();
const v35 = [-6,1,128,959659090,-1073741824];
const o36 = {
};
const v38 = new Proxy(v35, o36);
const v40 = new BigUint64Array(o36, BigUint64Array, BigUint64Array);
let v41;
try { v41 = v40.set(); } catch (e) {}
v38.copyWithin().splice(v41);
