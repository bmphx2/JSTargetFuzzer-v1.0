class C3 {
    static valueOf(a5) {
        let {"length":v6,...v7} = "prototype";
        v7.a;
        new WeakMap();
        for (let v11 = 0; v11 < 32; v11++) {
            const t6 = "prototype";
            t6["p" + v11] = v11;
        }
        return this;
    }
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function f20(a21, a22) {
    const o34 = {
        ...v15,
        "a": a22,
        [a22]: 536870887n,
        "b": v14,
        ["prototype"]: a22,
        valueOf(a24, a25) {
            a21.__proto__ = "prototype";
            function F26(a28, a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a22;
                this.c = a30;
                this.a = "prototype";
            }
            const v31 = new F26(a21, v15, a25);
            const v32 = new F26(v31, a22, a24);
            new F26(v32, a22, v15);
            return v16;
        },
    };
    return o34;
}
f20(v14, 536870887n);
f20(f20(v15, 536870887n), 536870887n);
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
