new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
}
new F2(WeakMap);
const v6 = new F2(WeakMap);
const v7 = new F2(v6);
const v11 = new Int32Array(256);
new Int16Array(256);
const v17 = new Object(4);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v21 = new F18();
const v22 = new F18();
const v23 = new F18();
let v25 = -937546.0274885385;
const v30 = [-1e-15,1000000.0,v25,v23];
const v31 = [1000000.0,-1e-15,v22,v30,-1e-15];
const v32 = [v23,v25,v23];
function f33(a34, a35) {
    const o49 = {
        "b": v6,
        ...a35,
        [v32]: v22,
        __proto__: a35,
        "d": v11,
        "f": a35,
        [a34]: v30,
        set a(a37) {
            this.__proto__ = v31;
            v32[0.22410269410035233] = a34;
            const v39 = Symbol.iterator;
            const o48 = {
                [v39]() {
                    let v41 = 10;
                    const o47 = {
                        next() {
                            v41--;
                            const v45 = v41 == 0;
                            const o46 = {
                                "done": v45,
                                "value": v41,
                            };
                            return o46;
                        },
                    };
                    return o47;
                },
            };
        },
    };
    return o49;
}
const v50 = f33(v32, v21);
f33(v32, v50, 4, v50, v7);
const v52 = f33(v31, v32);
with (v23) {
    let v53 = a;
    const v54 = v53 || v53;
    let v55 = `rizPp${0.22410269410035233}number${v52}sticky${426.7417148362349}-29565${v54}atan2`;
    ({"length":v53,} = v55);
    v25 |= 426.7417148362349;
    async function* f58(a59, a60, a61) {
        Object.defineProperty(v17, v54, { configurable: true, get: f33, set: f33 });
        await v54;
        yield Math;
        return a61;
    }
    f58(v54, v25, v53);
    let v65 = -9;
    Math.round(v65);
    const v68 = v55++;
    v65++;
    Math.fround(v68);
    Math.sign(v65);
    v65 || v55;
}
