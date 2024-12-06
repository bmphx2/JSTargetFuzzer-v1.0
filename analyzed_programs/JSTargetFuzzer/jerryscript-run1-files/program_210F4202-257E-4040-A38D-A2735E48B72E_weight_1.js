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
const v15 = new WeakSet([[Int32Array,Int32Array,Int32Array]]);
const v16 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
new Int32Array(3004);
const o19 = {
    "h": v16,
};
const o27 = {
    o(a22, a23, a24, a25) {
        `a`;
        return a25;
    },
};
("preventExtensions").toLowerCase();
class C29 extends F0 {
    static o(a31, a32, a33) {
        const v34 = v3[-2];
        const o35 = {
            "apply": f9,
            "call": f9,
            "byteOffset": f9,
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
        new Proxy(v3, v15);
        return v34;
    }
}
new C29();
new C29();
new C29();
const v44 = [-6,1,128,959659090,-1073741824];
const o45 = {
};
const v47 = new Proxy(v44, o45);
const v49 = new BigUint64Array(o45, BigUint64Array, BigUint64Array);
let v50;
try { v50 = v49.set(); } catch (e) {}
v47.copyWithin().splice(v50);
