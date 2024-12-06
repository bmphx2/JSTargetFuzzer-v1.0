new Int8Array(129);
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
        const o30 = {
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
                return o29;
            },
        };
        return a18;
    }
}
new C9();
new C9();
new C9();
const v36 = [-16,4];
const t34 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
v36.slice(1, delete t34[-9]);
