[-6866,-707406371,2147483647,4294967296,2,64,-45747,4,9007199254740992];
[-1878632348,-1631286319,2,-10,2147483648];
[-49738,7,7,-1,4,-1073741824];
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
        "e": a31,
        9: v27,
        [-2]: "-1024",
        [9223372036854775807]: v19,
        1073741825: a31,
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
            const v36 = Symbol.iterator;
            const o45 = {
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
                    return o44;
                },
            };
        },
    };
    return o46;
}
f30(v29, v18);
f30(-2147483648n, v19);
const v49 = f30(v28, v29);
with (v20) {
    let v50 = a;
    const v51 = v50 || v50;
    let v52 = `rizPp${0.22410269410035233}number${v49}sticky${426.7417148362349}-29565${v51}atan2`;
    ({"length":v50,} = v52);
    v22 |= 426.7417148362349;
    let v55 = -9;
    Math.round(v55);
    const v58 = v52++;
    v55++;
    Math.fround(v58);
    Math.sign(v55);
    v19.toString = v51;
    v55 || v52;
}
