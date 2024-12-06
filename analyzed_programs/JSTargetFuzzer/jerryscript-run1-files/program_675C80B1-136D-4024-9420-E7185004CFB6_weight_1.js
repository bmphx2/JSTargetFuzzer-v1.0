function f3() {
    return "n";
}
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v19 = new F16();
const v20 = new F16();
const v21 = new F16();
let v23 = -937546.0274885385;
const v28 = [-1e-15,1000000.0,v23,v21];
const v29 = [1000000.0,-1e-15,v20,v28,-1e-15];
const v30 = [v21,v23,v21];
function f31(a32, a33) {
    const o47 = {
        "b": -1e-15,
        ...a33,
        [v30]: v20,
        __proto__: v20,
        "d": v21,
        "f": a33,
        [a32]: v28,
        set a(a35) {
            this.__proto__ = v29;
            v30[0.22410269410035233] = a32;
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
f31(v30, v19);
f31(v30, v20);
const v50 = f31(v29, v30);
with (v21) {
    let v51 = a;
    let v53 = `rizPp${0.22410269410035233}number${v50}sticky${426.7417148362349}-29565${v51 || v51}atan2`;
    ({"length":v51,} = v53);
    v23 |= 426.7417148362349;
    let v56 = -9;
    Math.round(v56);
    const v59 = v53++;
    v56++;
    Math.fround(v59);
    Math.sign(v56);
    v56 || v53;
    const v65 = Symbol.toPrimitive;
    const o70 = {
        [v65]() {
            for (let v67 = 0; v67 < 32; v67++) {
                this["p" + v67] = v67;
            }
            return -2116564537;
        },
    };
    const v72 = [-1073741824,1073741824,-566284451,9,44901,2147483649];
    const v73 = [10000,-4096,1073741823,4294967297];
    ([-3.0,v73.push(v72, 1, v73),1,v72]).reverse();
}
