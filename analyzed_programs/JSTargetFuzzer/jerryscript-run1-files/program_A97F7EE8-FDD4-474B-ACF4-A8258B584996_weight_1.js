[1,4294967296,4096,-471738038,7,9223372036854775807,255,1000];
[10042,16,536870888,268435456,-8,128,9007199254740991];
[-1146603717,-50432,-536870912,268435439,-1586892163,-1473299051,65537];
[129];
[54515,5];
[127,536870887,-1792421709,4096,-33757,-8,929746825];
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
let v22 = -937546.0274885385;
const v27 = [-1e-15,4.283154438661394e+306,v22,v20];
const v28 = [4.283154438661394e+306,-1e-15,v19,v27,-1e-15];
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
    Math.sign(v55);
    v55 || v52;
}
