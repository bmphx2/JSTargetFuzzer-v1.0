function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
    this.f = 9007199254740990;
    this.cause = a8;
}
new F6(-7, -64040, 1073741824);
new F6(-405369710, 9, -7);
new F6(9, 9007199254740990, -405369710);
function F17() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9;
}
const v20 = new F17();
const v21 = new F17();
const v22 = new F17();
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
                            return this;
                        },
                    };
                    return o46;
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
    let v57 = -9;
    Math.round(9007199254740990);
    const v60 = v54++;
    v57++;
    Math.fround(v60);
    Math.sign(v57);
    v57 || v54;
}
