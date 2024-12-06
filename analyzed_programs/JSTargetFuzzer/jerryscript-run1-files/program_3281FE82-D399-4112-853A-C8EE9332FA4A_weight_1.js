function f0() {
}
new Int16Array(0);
new Float32Array(2974);
new Float32Array(6);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v16 = new F13();
const v17 = new F13();
const v18 = new F13();
let v20 = -937546.0274885385;
const v25 = [-1e-15,1000000.0,v20,v18];
const v26 = [1000000.0,-1e-15,v17,v25,-1e-15];
const v27 = [v18,v20,v18];
function f28(a29, a30) {
    const o46 = {
        "b": -1e-15,
        ...a30,
        [v27]: v17,
        __proto__: v17,
        "d": v18,
        "f": a30,
        [a29]: v25,
        set a(a32) {
            this.__proto__ = v26;
            v27[0.22410269410035233] = a29;
            const v34 = Symbol.iterator;
            const o45 = {
                [v34]() {
                    let v36 = 10;
                    const o42 = {
                        next() {
                            v36--;
                            const v40 = v36 == 0;
                            const o41 = {
                                "done": v40,
                                "value": v36,
                            };
                            return o41;
                        },
                    };
                    const o43 = {
                        __proto__: this,
                        "g": -2.0,
                    };
                    delete Symbol[v25];
                    return o42;
                },
            };
        },
    };
    return o46;
}
f28(v27, v16);
f28(v27, v17);
const v49 = f28(v26, v27);
with (v18) {
    let v50 = a;
    let v52 = `rizPp${0.22410269410035233}number${v49}sticky${426.7417148362349}-29565${v50 || v50}atan2`;
    ({"length":v50,} = v52);
    v20 |= 426.7417148362349;
    let v55 = -9;
    Math.round(v55);
    const v58 = v52++;
    v55++;
    Math.fround(v58);
    Math.sign(v55);
    v55 || v52;
}
