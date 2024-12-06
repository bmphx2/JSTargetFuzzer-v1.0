new Map();
new Int32Array(0);
new Float32Array(229);
let v17 = 9;
new Uint8ClampedArray(v17);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v23 = new F20();
const v24 = new F20();
const v25 = new F20();
let v27 = -937546.0274885385;
const v32 = [-1e-15,1000000.0,v27,v23];
const v33 = [1000000.0,v27,v24,v32,-1e-15];
const v34 = [v25,v27,v24];
function f35(a36, a37) {
    const o51 = {
        "b": -4.0,
        ...a37,
        [v34]: v24,
        __proto__: v24,
        "d": v25,
        "f": a37,
        [a36]: v32,
        set a(a39) {
            this.__proto__ = v33;
            v34[0.22410269410035233] = a36;
            const v41 = Symbol.iterator;
            const o50 = {
                [v41]() {
                    let v43 = 10;
                    const o49 = {
                        next() {
                            v43--;
                            v43 == 0;
                            const o48 = {
                                "done": a37,
                                "value": v43,
                            };
                            return o48;
                        },
                    };
                    return o49;
                },
            };
        },
    };
    return o51;
}
f35(v34, v23);
f35(v34, v24);
const v54 = f35(v33, v34);
with (v25) {
    let v55 = a;
    let v57 = `rizPp${0.22410269410035233}number${v54}sticky${426.7417148362349}-29565${v55 || v55}atan2`;
    ({"length":v55,} = v57);
    v27 |= 426.7417148362349;
    Math.round(-9);
    v57++;
    v17++;
    Math.fround(-179333.44542207872);
    Math.sign(-9);
    -9 || v57;
}
