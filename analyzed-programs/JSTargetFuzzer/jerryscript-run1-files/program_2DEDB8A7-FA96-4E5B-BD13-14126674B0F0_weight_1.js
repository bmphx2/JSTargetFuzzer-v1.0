new BigUint64Array(35);
new Int16Array(598);
new Uint16Array(255);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const o43 = {
        "b": -1e-15,
        ...a29,
        [v26]: 0.22410269410035233,
        __proto__: v16,
        "d": v17,
        "f": a29,
        [v19]: v24,
        set a(a31) {
            this.__proto__ = v25;
            v26[0.22410269410035233] = a28;
            const v33 = Symbol.iterator;
            const o42 = {
                [v33]() {
                    let v35 = 10;
                    const o41 = {
                        next() {
                            v35--;
                            const v39 = v35 == 0;
                            const o40 = {
                                "done": v39,
                                "value": v35,
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
f27(v26, v25);
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
    const v59 = [1000000000.0,-4.0,1000000.0];
    const o60 = {
        __proto__: v59,
    };
    const v62 = new Date(o60);
    function f63(a64, a65) {
        const o66 = {
            [a65]: a65,
        };
        return f63;
    }
    f63(f63(), v62);
    v52 || v49;
}
