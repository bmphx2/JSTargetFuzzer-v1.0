let v0 = -30866;
const v5 = new Int16Array(4096);
const v8 = new BigUint64Array(1000);
const v11 = new Int32Array(4);
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
const v26 = [v17,1000,v17];
function f27(a28, a29) {
    const o43 = {
        "b": 4,
        ...a29,
        [v26]: a29,
        __proto__: v16,
        "d": v8,
        "f": v5,
        [a28]: v24,
        set a(a31) {
            this.__proto__ = v25;
            v26[0.22410269410035233] = a28;
            const v33 = a29.iterator;
            const o42 = {
                [v33]() {
                    const o41 = {
                        next() {
                            v0--;
                            const v39 = 10 == 0;
                            const o40 = {
                                "done": v39,
                                "value": v11,
                            };
                            return o40;
                        },
                    };
                    return o41;
                },
            };
        },
    };
    return o43;
}
f27(v26, v15);
f27(v26, v16);
const v46 = f27(v25, v26);
with (v17) {
    let v47 = a;
    let v49 = `rizPp${0.22410269410035233}number${v46}sticky${426.7417148362349}-29565${v47 || v47}atan2`;
    ({"length":v47,} = v49);
    v19 |= 426.7417148362349;
    let v52 = -9;
    Math.round(v52);
    const v55 = v49++;
    v52++;
    Math.fround(v55);
    Math.sign(v52);
    v52 || v49;
}
