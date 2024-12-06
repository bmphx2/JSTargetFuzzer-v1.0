class C3 {
    6 = 9.463434992437033;
    static m(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
        return a5;
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
function F21(a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a25;
    this.h = a23;
    this.e = v18;
}
const v26 = new F21(v20, v18, v19);
new F21(v19, v20, 9.463434992437033);
new F21(v19, v19, v26);
new BigUint64Array(67);
new Uint32Array(16);
new Int32Array(4);
const v40 = new Uint32Array(181);
let v42 = BigUint64Array;
let v43 = new v42(1);
let v44 = 253;
[v44,,v42,v43] = v40;
try { v42["abs"](181, v44, v42); } catch (e) {}
new Uint16Array(v44);
for (let i57 = 0; i57 < 2; i57++) {
    const v63 = new Function("x");
    v63.name;
}
Function();
