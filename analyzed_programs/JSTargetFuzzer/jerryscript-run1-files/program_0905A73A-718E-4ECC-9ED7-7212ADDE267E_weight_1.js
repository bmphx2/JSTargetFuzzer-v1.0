const v6 = [-2060060308];
[12547,v6,2,2147483647,-1341237381];
[-1341237381,v6];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12(4.0, -1341237381);
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const o43 = {
        "b": -1e-15,
        ...a29,
        [v26]: v16,
        __proto__: v16,
        "d": v17,
        "f": a29,
        [a28]: v24,
        set a(a31) {
            this.__proto__ = v25;
            v26[1.3562437526991804e+308] = a28;
            const v33 = Symbol.iterator;
            const o42 = {
                [v33]() {
                    let v35 = 10;
                    const o41 = {
                        matchAll() {
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
    let v49 = `rizPp${1.3562437526991804e+308}number${v46}sticky${426.7417148362349}-29565${v47 || v47}atan2`;
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
