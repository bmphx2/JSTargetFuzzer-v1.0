[];
new Uint8Array();
const v5 = new Uint8Array(230);
new BigInt64Array(5, v5);
new Int8Array(1000);
new Int32Array(6);
let v16 = Int16Array;
new v16(184);
const v20 = new Float64Array(65);
new RangeError(6, RangeError, Float64Array);
let v26;
try {
const t0 = 184;
v26 = t0(5, 65);
} catch (e) {}
class C27 {
    valueOf(a29, a30) {
        let v31;
        try { v31 = a30(); } catch (e) {}
        ({"b":v26,"e":a29,} = v31);
    }
    static n(a33, a34, a35, a36) {
        try {
            super.p();
        } catch(e38) {
        }
    }
}
[v16] = v20;
const v43 = Symbol.d;
const o52 = {
    [v43]() {
        let v45 = 10;
        const o51 = {
            n() {
                v45--;
                const v49 = v45 == 0;
                const o50 = {
                    "done": v49,
                    "value": v45,
                };
                return o50;
            },
        };
        return o51;
    },
};
