function f9() {
    return -1.7976931348623157e+308;
}
function F10() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v13 = new F10();
const v14 = new F10();
const v15 = new F10();
let v17 = -937546.0274885385;
const v22 = [-1e-15,1000000.0,v17,v15];
const v23 = [1000000.0,-1e-15,v14,v22,-1e-15];
const v24 = [v15,v17,v15];
function f25(a26, a27) {
    const o41 = {
        "b": -1e-15,
        ...a27,
        [v24]: v14,
        __proto__: v14,
        "d": v15,
        "f": a27,
        [a26]: v22,
        set a(a29) {
            this.__proto__ = v23;
            v24[0.22410269410035233] = a26;
            const v31 = Symbol.iterator;
            const o40 = {
                [v31]() {
                    let v33 = 10;
                    const o39 = {
                        next() {
                            v33--;
                            const v37 = v33 == 0;
                            const o38 = {
                                "done": v37,
                                "value": v33,
                            };
                            return o38;
                        },
                    };
                    return o39;
                },
            };
        },
    };
    return o41;
}
f25(v24, v13);
f25(v24, v14);
const v44 = f25(v23, v24, 3.31355267635798e+307, v14, 0.22410269410035233);
with (v15) {
    let v45 = a;
    let v47 = `rizPp${0.22410269410035233}number${v44}sticky${426.7417148362349}-29565${v45 || v45}cause`;
    ({"length":v45,} = v47);
    v17 |= 426.7417148362349;
    let v50 = -9;
    Math.round(v50);
    const v53 = v47++;
    v50++;
    Math.fround(v53);
    Math.sign(v50);
    v50 || v47;
}
