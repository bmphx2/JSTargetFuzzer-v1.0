function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
new F12();
v15[65537] /= v19;
const v30 = [v17,v19,v17];
function f31(a32, a33) {
    const o47 = {
        "b": -1e-15,
        ...a33,
        [v30]: v16,
        __proto__: v16,
        "d": v17,
        "f": a33,
        [a32]: v24,
        set a(a35) {
            this.__proto__ = v25;
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
                                ...a35,
                                8: F12,
                                __proto__: this,
                                "h": a35,
                                "b": a32,
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
f31(v30, v15);
f31(v30, v16);
const v50 = f31(v25, v30);
with (v17) {
    let v51 = a;
    let v53 = `rizPp${0.22410269410035233}number${v50}sticky${426.7417148362349}-29565${v51 || v51}atan2`;
    ({"length":v51,} = v53);
    v19 |= 426.7417148362349;
    let v56 = -9;
    Math.round(v56);
    const v59 = v53++;
    v56++;
    Math.fround(v59);
    Math.sign(v56);
    v56 || v53;
}
