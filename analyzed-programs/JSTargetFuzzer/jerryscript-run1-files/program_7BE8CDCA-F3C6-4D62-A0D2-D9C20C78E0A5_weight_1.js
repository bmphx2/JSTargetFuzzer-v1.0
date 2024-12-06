new Float32Array(217);
new Uint16Array(4);
const v11 = new Uint8Array(1961);
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
        __proto__: v19,
        "d": v20,
        "f": "4294967297",
        [a31]: v27,
        set a(a34) {
            this.__proto__ = v28;
            v29[0.22410269410035233] = a31;
            const v36 = a31.iterator;
            const o49 = {
                [v36]() {
                    let v38 = 10;
                    const o44 = {
                        next() {
                            v38--;
                            const v42 = v38 == 0;
                            const o43 = {
                                "done": v42,
                                "value": v38,
                            };
                            return o43;
                        },
                    };
                    Object.defineProperty(o44, o44, { enumerable: true, get: Symbol });
                    try { v11.copyWithin(4, a32); } catch (e) {}
                    for (let v46 = 0; v46 < 32; v46++) {
                        const t44 = "getOwnPropertyDescriptors";
                        t44["p" + v46] = v46;
                    }
                    return o44;
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
