function f9() {
    return 2;
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v13 = new F10();
const v14 = new F10(-1, "g");
const v15 = new F10();
let v17 = -937546.0274885385;
const v22 = [-1e-15,1000000.0,v17,v15];
const v23 = [1000000.0,-1e-15,v14,v22,-1e-15];
try { ("g").indexOf(...v23, ...2, ...v22, -1, 10000); } catch (e) {}
const o28 = {
    "deleteProperty": f9,
    "getOwnPropertyDescriptor": f9,
    "setPrototypeOf": f9,
};
new SyntaxError(v15, o28);
const v31 = [v15,v17,v15];
function f32(a33, a34) {
    const o48 = {
        "b": -1e-15,
        ...a34,
        [v31]: v14,
        __proto__: v14,
        "PI": v15,
        "f": a34,
        [a33]: v22,
        set a(a36) {
            this.__proto__ = v23;
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
                                "h": v40,
                            };
                            return o45;
                        },
                    };
                    return o46;
                },
            };
        },
    };
    return o48;
}
f32(v31, v14, f32, "-4294967297", f32(v31, v13));
const v51 = f32(v23, v31);
with (v15) {
    let v52 = a;
    let v54 = `rizPp${0.22410269410035233}number${v51}sticky${426.7417148362349}-29565${v52 && v52}atan2`;
    ({"length":v52,} = v54);
    v17 |= 426.7417148362349;
    let v57 = -9;
    Math.round(v57);
    const v60 = v54++;
    v57++;
    Math.fround(v60);
    Math.sign(v57);
    v57 || v54;
}
