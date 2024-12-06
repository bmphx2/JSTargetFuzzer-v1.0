const v1 = new WeakMap();
function f2(a3) {
    const o15 = {
        9: a3,
        ...a3,
        "a": v1,
        __proto__: a3,
        "b": a3,
        "e": a3,
        "c": WeakMap,
        m(a5, a6) {
            const v7 = v1.a;
            try { new v7(this, this, v7, a3, v1); } catch (e) {}
            let v9 = 10;
            for (; v9--;) {
                this || a6;
                let {"h":v13,...v14} = a3;
            }
            return a3;
        },
    };
    return o15;
}
const v16 = f2(f2);
const v17 = f2(v1);
const v18 = f2(v17);
class C19 extends WeakMap {
    255;
    constructor(a21, a22, a23, a24) {
        super(a23);
        new Int16Array(512);
        new Float64Array(128);
        new Uint8ClampedArray(5);
    }
    static 9 = f2;
}
const v34 = new C19(v17, f2, v17, C19);
new C19(v18, v34, v16, v17);
const v36 = new C19(v18, WeakMap, v18, v17);
new Uint32Array(9);
let v45 = new Uint16Array(4);
new Uint32Array(6);
Object.defineProperty(v18, "a", { configurable: true, enumerable: true, get: f2, set: f2 });
C19.h = v45;
v45 >>= v45;
v36.e /= 9;
v34["Squ"] = "maxByteLength";
