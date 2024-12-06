function f3() {
    return 1455130823;
}
new Int8Array(5);
new Uint8ClampedArray(127);
new Float32Array(1030);
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
    const o50 = {
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
            const o49 = {
                [v34]() {
                    const v39 = f28 + this;
                    try {
                        super.m(Uint8ClampedArray, -1220768139, v39);
                    } catch(e41) {
                    }
                    let v42 = 10;
                    const o48 = {
                        next() {
                            v42--;
                            const v46 = v42 == 0;
                            const o47 = {
                                "done": v46,
                                "value": v42,
                            };
                            return o47;
                        },
                    };
                    return o48;
                },
            };
        },
    };
    return o50;
}
f28(v27, v16);
f28(v27, v17);
const v53 = f28(v26, v27);
with (v18) {
    let v54 = a;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${v54 || v54}atan2`;
    ({"length":v54,} = v56);
    v20 |= 426.7417148362349;
    let v59 = -9;
    Math.round(v59);
    const v62 = v56++;
    v59++;
    Math.fround(v62);
    Math.sign(v59);
    v59 || v56;
}
