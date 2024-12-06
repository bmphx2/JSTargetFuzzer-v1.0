const v2 = new Int8Array(129);
new Float64Array(1);
new Int32Array(16);
class C9 extends Int32Array {
    p(a11, a12, a13) {
        this[0] += 1;
        return Int8Array;
    }
    static p(a18, a19) {
        C9[a18] = a18;
        const v21 = Symbol.iterator;
        const o34 = {
            [v21]() {
                let v23 = 10;
                const o29 = {
                    next() {
                        const v25 = v23--;
                        v23 == 0;
                        const o28 = {
                            "done": v25,
                            "value": v23,
                        };
                        return o28;
                    },
                };
                super.length = this;
                Int32Array ^ 16;
                for (let v31 = 0; v31 < 32; v31++) {
                    o29["p" + v31] = v31;
                }
                return o29;
            },
        };
        return a18;
    }
}
const v35 = new C9();
const v36 = new C9();
const v37 = new C9();
const v40 = [-16,4];
const v41 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
let v43;
try {
const t0 = 129;
v43 = t0(Float64Array);
} catch (e) {}
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a48;
    this.f = v43;
}
new F44(Float64Array, v36, 16);
new F44(v2, v35, 1);
new F44(16, v37, 45103);
v40.slice(1, delete v41[-9]);
