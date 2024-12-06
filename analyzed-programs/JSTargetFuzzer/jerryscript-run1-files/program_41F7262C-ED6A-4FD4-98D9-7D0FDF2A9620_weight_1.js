let v5 = 2147483649;
class C6 {
    constructor(a8, a9) {
        a8.h = v5;
    }
    p(a14, a15) {
        v5 = a15;
        function f16(a17, a18, a19, a20) {
            return a15;
        }
        f16(a15, -63121, 24081, a14);
        return this;
    }
}
new C6(9007199254740990, 536870889);
const v24 = new C6(-4294967295, 536870889);
const v25 = new C6(536870889, -4294967295);
const v27 = [[v25,536870889],v24,-4294967295,-63121];
const v28 = [-4294967295,9007199254740990];
v28[24081] >>= 536870889;
function F29(a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a33;
}
new F29(-63121, v28, v24);
new F29(v27, v27, v5);
const v36 = new F29(-63121, v28, C6);
const v38 = Symbol.toStringTag;
v36[v38] = v38;
