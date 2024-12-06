new Set();
class C10 extends Set {
    static {
        super.size = -4096n;
    }
    f;
    static {
        const o15 = {
            "maxByteLength": 2508604206,
        };
        const v17 = new ArrayBuffer(16, o15);
        new BigUint64Array(v17);
    }
}
new C10();
const v21 = new C10();
const v22 = new C10();
C10[v22] *= 256;
let v23 = 0;
do {
    let v24;
    try { v24 = v22(Set, true, -4096n, ...v22, v23, -695588846n); } catch (e) {}
    let v26 = -2;
    const v28 = (v24 % v21) && -406963484n;
    const v29 = -406963484n & v26;
    v26--;
    v29 >>> v28;
    v23++;
} while (v23 < 3)
