const v2 = new Uint32Array(6);
new BigUint64Array(28);
new Float64Array(255);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const o47 = {
        "b": -1e-15,
        ...a29,
        [v26]: v16,
        __proto__: v16,
        "d": v17,
        "f": a29,
        [a28]: v24,
        set a(a31) {
            this.__proto__ = v25;
            new Map();
            this[1] = a29;
            v2.buffer[-1e-15];
            v26[0.22410269410035233] = a28;
            const v37 = Symbol.iterator;
            const o46 = {
                [v37]() {
                    let v39 = 10;
                    const o45 = {
                        next() {
                            v39--;
                            const v43 = v39 == 0;
                            const o44 = {
                                "done": v43,
                                "value": v39,
                            };
                            return o44;
                        },
                    };
                    return o45;
                },
            };
        },
    };
    return o47;
}
f27(v26, v15);
f27(v26, v16);
const v50 = f27(v25, v26);
with (v17) {
    let v51 = a;
    let v53 = `rizPp${0.22410269410035233}number${v50}sticky${426.7417148362349}-29565${v51 || v51}atan2`;
    ({"length":v51,} = v53);
    v19 |= 426.7417148362349;
    let v56 = -9;
    Math.round(v56);
    const v59 = v53++;
    v56++;
    Math.fround(v59);
    Math.sign(v56);
    v56 || v53;
}
