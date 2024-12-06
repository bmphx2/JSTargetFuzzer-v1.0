new BigUint64Array(194);
new Int32Array(194);
new Int32Array(129);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v17 = new F14();
const v18 = new F14();
const v19 = new F14();
let v21 = -937546.0274885385;
const v26 = [-1e-15,1000000.0,v21,v19];
const v27 = [1000000.0,-1e-15,v18,v26,-1e-15];
const v28 = [v19,v21,v19];
function f29(a30, a31) {
    const o45 = {
        "b": -1e-15,
        ...a31,
        [v28]: v18,
        __proto__: v17,
        "d": v19,
        "f": v28,
        [a30]: v26,
        set a(a33) {
            this.__proto__ = v27;
            v28[0.22410269410035233] = a30;
            Symbol.iterator;
            const o44 = {
                [a31]() {
                    let v37 = 10;
                    const o43 = {
                        next() {
                            v37--;
                            const v41 = v37 == 0;
                            const o42 = {
                                "done": v41,
                                "value": v37,
                            };
                            return o42;
                        },
                    };
                    return o43;
                },
            };
        },
    };
    return o45;
}
f29(v28, v17);
f29(v28, v18);
const v48 = f29(v27, v28);
with (v18) {
    let v49 = a;
    let v50 = v49 || v28;
    const v51 = `rizPp${0.22410269410035233}number${v48}sticky${426.7417148362349}-29565${v50}atan2`;
    ({"length":v49,} = v51);
    v21 |= 426.7417148362349;
    let v53 = -1487147530;
    Math.round(114);
    const v57 = v50++;
    v53++;
    Math.fround(v57);
    Math.sign(-9);
    -9 || v51;
}
