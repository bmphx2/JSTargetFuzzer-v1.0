let v0 = 65535;
new Float64Array(4096);
new BigUint64Array(227);
new Uint16Array(255);
let v13 = new WeakMap();
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    v13 = this;
    this[69] = Float64Array;
    let v17;
    try { v17 = this["n"]("n", "n"); } catch (e) {}
    new Uint16Array(227, v17, v0);
    this.a = -589293468;
}
const v20 = new F14();
const v21 = new F14();
const v22 = new F14();
let v24 = -937546.0274885385;
const v29 = [-1e-15,1000000.0,v24,v22];
const v30 = [1000000.0,-1e-15,v21,v29,-1e-15];
const v31 = [v22,v24,v22];
function f32(a33, a34) {
    const o48 = {
        "b": -1e-15,
        ...a34,
        [v31]: v21,
        __proto__: v21,
        "d": v22,
        "f": a34,
        [a33]: v29,
        set a(a36) {
            this.__proto__ = v30;
            v31[0.22410269410035233] = a33;
            const v38 = Symbol.iterator;
            const o47 = {
                [v38]() {
                    let v40 = 10;
                    const o46 = {
                        next() {
                            v40--;
                            const v44 = v40 == 0;
                            const o45 = {
                                "done": v44,
                                "value": v40,
                            };
                            return o45;
                        },
                    };
                    return v13;
                },
            };
        },
    };
    return o48;
}
f32(v31, v20);
f32(v31, v21);
const v51 = f32(v30, v31);
with (v22) {
    let v52 = a;
    let v54 = `rizPp${0.22410269410035233}number${v51}sticky${426.7417148362349}-29565${v52 || v52}atan2`;
    ({"length":v52,} = v54);
    v24 |= 426.7417148362349;
    Math.round(-9);
    const v60 = v54++;
    v0++;
    Math.fround(v60);
    Math.sign(-9);
    255 || v54;
}
