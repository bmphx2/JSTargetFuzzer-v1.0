let v0 = [];
const v3 = new Uint8ClampedArray(1233);
const v6 = new Int32Array(2059);
let v9 = new BigUint64Array(3826);
class C10 extends BigUint64Array {
    #toString(a12, a13, a14, a15) {
        switch (v6) {
            default:
                delete v3[a14];
                break;
        }
        try { Int32Array(v6, a12, a14); } catch (e) {}
        return a15;
    }
    static toString(a19, a20, a21) {
        const v22 = v3[v9];
        const v23 = v3[2];
        v0 = v23;
        const v24 = v22 instanceof Int32Array;
        try {
            v6.#toString(v22, v23, v23, v3);
        } catch(e26) {
        }
        return v24;
    }
}
const v27 = new C10();
const v28 = new C10();
new C10();
v0.toString = v0;
v28[-1];
let v38 = Symbol.iterator;
v28[v38];
[v9,v38] = v9;
v27.length;
