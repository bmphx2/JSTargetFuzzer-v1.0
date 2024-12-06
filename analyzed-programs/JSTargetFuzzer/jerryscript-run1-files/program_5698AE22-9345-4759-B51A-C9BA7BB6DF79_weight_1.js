new BigUint64Array(1000);
new Uint32Array(3);
new BigUint64Array(5);
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
    const o46 = {
        "b": -1e-15,
        ...a32,
        [v29]: v19,
        __proto__: v19,
        "d": v20,
        "f": a32,
        [a31]: v27,
        set a(a34) {
            this.__proto__ = v28;
            v29[0.22410269410035233] = a31;
            let v36 = Symbol.iterator;
            const o45 = {
                [v36]() {
                    const o44 = {
                        next() {
                            v36--;
                            const v42 = 10 == 0;
                            const o43 = {
                                "done": v42,
                                "value": 10,
                            };
                            return o43;
                        },
                    };
                    return o44;
                },
            };
        },
    };
    return o46;
}
f30(v29, v18);
f30(v29, v19);
const v49 = f30(v28, v29);
with (v20) {
    let v50 = a;
    let v52 = `rizPp${0.22410269410035233}number${v49}sticky${426.7417148362349}-29565${v50 || v50}atan2`;
    ({"length":v50,} = v52);
    v22 |= 426.7417148362349;
    let v55 = -9;
    Math.round(v55);
    const v58 = v52++;
    v55++;
    Math.fround(v58);
    const o61 = {
    };
    SyntaxError(o61[2]);
    Math.sign(v55);
    v55 || v52;
}
