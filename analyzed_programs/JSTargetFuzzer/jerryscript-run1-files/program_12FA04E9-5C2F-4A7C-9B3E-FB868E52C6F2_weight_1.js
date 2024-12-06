new Uint8Array(2);
const v6 = [-4294967296];
try { v6.slice(-4294967297n); } catch (e) {}
new Float32Array(127);
new BigUint64Array(8);
class C14 {
}
class C15 extends C14 {
    constructor(a17, a18, a19) {
        super();
        const v21 = [a19];
        Reflect.apply(a17.copyWithin, a19, v21);
    }
}
new Uint16Array(83);
function F25(a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = BigUint64Array;
    this.b = BigUint64Array;
}
new F25(8, 2);
new F25(83, 83);
new F25(2, 8);
function f33() {
    const v34 = [9007199254740990];
    const o36 = {
        __proto__: v34,
        1: 13,
    };
    o36.indexOf(13);
    return "12";
}
const v38 = f33();
let v39 = -9007199254740990n;
v39 += v39;
const v41 = new Float32Array(8);
v41.reverse();
class C43 extends f33 {
}
const v44 = new C43();
v38 <= v44;
