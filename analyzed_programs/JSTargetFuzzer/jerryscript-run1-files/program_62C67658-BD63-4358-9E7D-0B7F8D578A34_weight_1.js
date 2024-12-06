const v9 = [4,2147483647];
[v9,-65536,"Zb",-809550676];
[-809550676,-809550676];
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
const v26 = [v17,v19,v17,v19,-9007199254740992];
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
f27(v26, v15);
f27(v26, v16);
const v46 = f27(v25, v26);
with (v17) {
    for (let v47 = 0; v47 < 32; v47++) {
        v9["p" + v47] = v47;
    }
    let v50 = a;
    let v52 = `rizPp${0.22410269410035233}number${v46}sticky${426.7417148362349}-29565${v50 || v50}atan2`;
    ({"length":v50,} = v52);
    v19 |= 426.7417148362349;
    let v55 = -9;
    Math.round(v55);
    const v58 = v52++;
    v55++;
    Math.fround(v58);
    Math.sign(v55);
    v55 || v52;
}
