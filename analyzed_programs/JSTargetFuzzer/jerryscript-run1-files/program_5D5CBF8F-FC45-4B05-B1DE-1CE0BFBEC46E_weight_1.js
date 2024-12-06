[-2147483647,[[-2147483647,2],2,-2031721797],2,2];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [1000000.0,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const o43 = {
        "b": -1e-15,
        ...a28,
        [v26]: a28,
        __proto__: a29,
        "d": v17,
        "f": a29,
        [a28]: v24,
        set a(a31) {
            a31.__proto__ = v25;
            v26[0.22410269410035233] = a29;
            Symbol.iterator;
            const o42 = {
                [a28]() {
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
f27(v26, v15);
f27(v26, v16);
const v46 = f27(v25, v26);
with (v17) {
    let v47 = a;
    let v49 = `rizPp${0.22410269410035233}number${v46}sticky${0.22410269410035233}-29565${v47 || v47}atan2`;
    ({"length":v47,} = v49);
    v19 |= 1000000.0;
    let v51 = -1487147530;
    Math.round(-33856);
    const v55 = v49++;
    v51++;
    Math.fround(v55);
    Math.sign(-9);
    -9 || v49;
}
