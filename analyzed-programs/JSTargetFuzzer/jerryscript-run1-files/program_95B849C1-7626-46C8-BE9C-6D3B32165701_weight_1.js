const v6 = [1,-9,-9,-50423,129];
const v7 = [-50423,129,v6];
const v8 = [v7,v6,-4096,v7,v6];
const v9 = [v8];
const v10 = [-50423,v9];
const v11 = [-50423,-4096,v10,v8,-4096];
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
const v47 = f30(v29, v18);
const v48 = v10[129];
-(-4.226150381205023);
+-4.226150381205023 >>> v11;
f30(v29, v19);
const v56 = f30(v28, v29);
with (v20) {
    let v57 = a;
    const v58 = v57 || v57;
    let v59 = `rizPp${0.22410269410035233}number${v56}sticky${426.7417148362349}-29565${v58}atan2`;
    let v60 = 0;
    do {
        function F61(a63, a64, a65, a66) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = a65;
        }
        new F61(2.048897159016724e+307, -1e-15, v56, v6);
        new F61(v48, 2.048897159016724e+307, v18, v58);
        new F61(1000000.0, 426.7417148362349, v58, v9);
        v60++;
    } while (v60 < 10)
    ({"length":v57,} = v59);
    v22 |= 426.7417148362349;
    let v75 = -9;
    function F77(a79, a80, a81, a82) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = a80;
        this.c = Math;
        this.f = a81;
    }
    const v83 = new F77(0.22410269410035233, v47, v58, v8);
    new F77(0.22410269410035233, v83, v27, v10);
    new F77(2.048897159016724e+307, v75, v6, v8);
    Math.round(v75);
    const v87 = v59++;
    v75++;
    Math.fround(v87);
    Math.sign(v75);
    v75 || v59;
}
