function f0() {
}
class C8 {
}
for (let i10 = 0; i10 < 4; i10++) {
    C8[4294967295] = -2;
    const v17 = Symbol.iterator;
    const o26 = {
        [v17]() {
            let v19 = 10;
            const o25 = {
                next() {
                    v19--;
                    const v23 = v19 == 0;
                    const o24 = {
                        "done": v23,
                        "value": v19,
                    };
                    return o24;
                },
            };
            return o25;
        },
    };
}
const v27 = C8.bind();
const v31 = [f0,785678316];
const v32 = [299231062,-2,14];
const v33 = [-2];
let v35 = 0;
while (v35 < 8) {
    const v38 = C8[v35];
    function F39(a41, a42, a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a42;
        this.e = 299231062;
    }
    new F39(v33, v31, v31, 14);
    new F39(v38, v32, v33, 257);
    new F39(v31, v38, v33, v27);
    v35++;
}
const v55 = [[4,536870889,536870889],-4096];
const v56 = [v55,536870889];
new Int32Array(0);
new Float32Array(4);
new BigUint64Array(129);
let v66 = 10;
for (; v66--;) {
    v55[2242260299] = v55;
    -4096 << Float32Array;
}
try { v56.values(); } catch (e) {}
