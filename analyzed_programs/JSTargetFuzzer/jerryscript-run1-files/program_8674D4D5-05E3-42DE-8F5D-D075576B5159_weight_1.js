const v5 = new Int16Array(64);
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
    const o50 = {
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
            const o49 = {
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
                    const o46 = {
                        "has": f30,
                        "isExtensible": f30,
                        "ownKeys": f30,
                        "preventExtensions": Symbol,
                        "set": Symbol,
                    };
                    new Proxy(v5, o46);
                    return o45;
                },
            };
        },
    };
    return o50;
}
f30(v29, v18);
f30(v29, v19);
const v53 = f30(v28, v29);
with (v20) {
    let v54 = a;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${v54 || v54}atan2`;
    ({"length":v54,} = v56);
    v22 |= 426.7417148362349;
    let v59 = -9;
    Math.round(v59);
    const v62 = v56++;
    v59++;
    Math.fround(v62);
    Math.sign(v59);
    v59 || v56;
}
