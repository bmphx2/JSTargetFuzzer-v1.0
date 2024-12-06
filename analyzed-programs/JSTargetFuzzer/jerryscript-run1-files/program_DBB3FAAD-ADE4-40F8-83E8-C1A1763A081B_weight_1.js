new Int16Array(64);
new Float32Array(34);
new BigInt64Array(42);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
let v22 = -937546.0274885385;
const v27 = [-1e-15,1000000.0,v22,v20];
const v28 = [1000000.0,-1e-15,v19,v27,-1e-15];
const v29 = [v20,v22,v20];
function f30(a31, a32) {
    const o47 = {
        "b": -1e-15,
        ...a32,
        [v29]: v19,
        ...a32,
        get c() {
            a31[2] = v29;
            return this;
        },
        __proto__: v19,
        "d": v20,
        "f": a32,
        [a31]: v27,
        set a(a35) {
            this.__proto__ = v28;
            v29[0.22410269410035233] = a31;
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
f30(v29, v18);
f30(v29, v19);
const v50 = f30(v28, v29);
with (v20) {
    let v51 = a;
    let v53 = `rizPp${0.22410269410035233}number${v50}sticky${426.7417148362349}-29565${v51 || v51}atan2`;
    ({"length":v51,} = v53);
    v22 |= 426.7417148362349;
    let v56 = -9;
    Math.round(v56);
    const v59 = v53++;
    v56++;
    Math.fround(v59);
    Math.sign(v56);
    v56 || v53;
}
