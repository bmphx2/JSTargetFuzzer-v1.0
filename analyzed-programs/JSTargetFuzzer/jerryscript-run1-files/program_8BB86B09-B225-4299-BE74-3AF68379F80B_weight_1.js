let v0 = [];
const v1 = [v0];
const v2 = [v1,v1];
const v3 = [v2,v0];
const v5 = new Map();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    this.c = a8;
    this.g = v1;
}
const v10 = new F6(v3, v0);
const v11 = new F6(v1, v10);
new F6(v3, v11);
function f13(a14, a15, a16) {
    const o24 = {
        "a": v1,
        ...v11,
        10: a14,
        __proto__: v11,
        toString(a18, a19, a20, a21) {
            ({"b":a19,"size":v0,} = v5);
            try {
                super.setInt16(this);
            } catch(e23) {
            }
            return a16;
        },
    };
    return o24;
}
f13(v2, v1, v10);
f13(v3, v0, v10);
f13(v1, v1, v10);
const v28 = [-22965,14,-65535,4294967296,-4294967295,26499];
const v29 = [2,-65025,65537,-53821,10000,5];
const v30 = [-9223372036854775807,-1572874415,268435440,9223372036854775807,-2147169615,7026,-14,127];
class C31 {
    constructor(a33, a34) {
        a33[65537] /= a34;
        let v37 = 4294967296;
        v37--;
        39631 << v28;
        v37 | v30;
        const v41 = -v30;
        v28 || v28;
        Math.ceil(v41);
        Math.max(v30);
    }
}
const v45 = new C31(v28, v29);
new C31(v30, v30);
new C31(v30, v45);
new Uint32Array(2800);
new Float64Array(227);
new Int32Array(1000);
new BigUint64Array(C31);
const v62 = new Int8Array(v30);
const v65 = new BigUint64Array(64);
let v71 = 2.2250738585072014e-308;
h = Float64Array;
let v77 = 434742601;
v62.length = -13;
[v77,...v71] = v65;
try { v71(v77, -505.82829815177945, BigUint64Array, v62); } catch (e) {}
