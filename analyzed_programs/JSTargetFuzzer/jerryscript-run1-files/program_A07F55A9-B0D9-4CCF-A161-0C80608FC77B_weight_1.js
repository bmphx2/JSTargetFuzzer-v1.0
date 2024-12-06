class C3 {
    constructor(a5) {
        try { new a5(1073741824, -2147483649, 1635280380, 1635280380, 65537); } catch (e) {}
    }
    valueOf(a12, a13) {
        function f14(a15, a16, a17) {
            const o18 = {
                "d": 1073741824,
                ...this,
            };
            return o18;
        }
        f14(f14, "POSITIVE_INFINITY", 1073741824);
        f14(a13, 1073741824, f14(this, this, 1073741824));
        return a12;
    }
}
const v22 = new C3(1073741824, "undefined", 1073741824);
const v23 = new C3(v22, C3, "POSITIVE_INFINITY");
const v24 = new C3("undefined");
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a29;
}
const v31 = new F25(v24, v22, v22, C3, v23, F25, v22);
const v32 = new F25(v24, v24, F25, v24);
new F25(C3, v24, v23, v22);
new WeakMap();
const v37 = [v24,v32,F25,C3,v31];
[v23];
[C3,v37];
function f40() {
}
new Uint8Array(0);
let v54 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v56 = new Int32Array(127);
v54 /= v56;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
