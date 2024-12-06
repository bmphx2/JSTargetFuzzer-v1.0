class C9 {
    static p(a11, a12, a13) {
        let [v14] = "MIN_SAFE_INTEGER";
        try { new v14(128, -3.0, "c", this); } catch (e) {}
        const v20 = Symbol.iterator;
        const o29 = {
            [v20]() {
                let v22 = 10;
                const o28 = {
                    next() {
                        v22--;
                        const v26 = v22 == 0;
                        const o27 = {
                            "h": v26,
                            "value": v22,
                        };
                        return o27;
                    },
                };
                return o28;
            },
        };
        return o29;
    }
}
new C9();
new C9();
new C9();
function f33() {
    return -3.0;
}
const v36 = new Uint32Array(181, f33, Uint32Array);
let v38 = BigUint64Array;
let v39 = new v38(1);
let v40 = 253;
[v40,,v38,v39] = v36;
try { v38["abs"](181, v40, v38); } catch (e) {}
new Uint16Array(v40);
for (let i53 = 0; i53 < 2; i53++) {
    const v59 = new Function("x");
    v59.name;
}
Function();
