const v2 = new Uint8Array(4096);
let v5 = new Int8Array(3813);
const v8 = new Uint32Array(0);
class C9 {
    constructor(a11, a12) {
        const v14 = Symbol.iterator;
        const o23 = {
            [v14]() {
                let v16 = 10;
                const o22 = {
                    next() {
                        v16--;
                        const v20 = v16 == 0;
                        const o21 = {
                            "done": v20,
                            "value": v16,
                        };
                        return o21;
                    },
                };
                return o22;
            },
        };
    }
}
const v24 = new C9(4096, C9);
const v25 = new C9(4096, 4096);
new C9(4096, v5);
let v30;
try { v30 = new Int8Array(...v2, 536870887, v24, 4096, ...v2, ...v25); } catch (e) {}
v8[Int8Array] = 3813;
new Uint32Array(v8, 3813, 3813);
v5--;
try { v24.valueOf(536870889, v24); } catch (e) {}
try { v30.o(Uint8Array); } catch (e) {}
function f35() {
    return 0;
}
