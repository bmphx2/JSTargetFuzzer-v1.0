function f0() {
}
class C8 {
}
for (let i10 = 0; i10 < 4; i10++) {
    C8[4294967295] = -2;
    const v17 = Symbol.iterator;
    const o38 = {
        [v17]() {
            let v19 = 10;
            const o37 = {
                next() {
                    v19--;
                    const v23 = v19 == 0;
                    const v26 = new Int32Array(166);
                    function f27(a28, a29, a30) {
                        const o31 = {
                            ...v26,
                        };
                        return o31;
                    }
                    const v32 = f27();
                    Object.defineProperty(f27(), "a", { configurable: true, enumerable: true, set: f27 });
                    for (const v34 in v32) {
                        delete v26[v34];
                    }
                    const o36 = {
                        "done": v23,
                        "value": v19,
                    };
                    return o36;
                },
            };
            return o37;
        },
    };
}
const v39 = C8.bind();
const v43 = [f0,785678316];
const v44 = [299231062,-2,14];
const v45 = [-2];
let v47 = 0;
while (v47 < 8) {
    const v50 = C8[v47];
    function F51(a53, a54, a55, a56) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a54;
        this.e = 299231062;
    }
    new F51(v45, v43, v43, 14);
    new F51(v50, v44, v45, 257);
    new F51(v43, v50, v45, v39);
    v47++;
}
const v67 = [[4,536870889,536870889],-4096];
const v68 = [v67,536870889];
new Int32Array(0);
new Float32Array(4);
new BigUint64Array(129);
let v78 = 10;
for (; v78--;) {
    v67[2242260299] = v67;
    -4096 << Float32Array;
}
try { v68.values(); } catch (e) {}
