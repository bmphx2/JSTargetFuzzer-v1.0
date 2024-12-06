[];
let v2 = Int16Array;
new v2(15);
new Uint8Array(95);
new BigUint64Array(8);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v16 = new F13();
const v17 = new F13();
const v18 = new F13();
const v25 = [-1e-15,1000000.0,-937546.0274885385,v18];
const v26 = [1000000.0,-1e-15,v17,v25,-1e-15];
let v27 = [v18,-937546.0274885385,v18];
function f28(a29, a30) {
    const o48 = {
        "b": 95,
        ...a30,
        [v27]: v17,
        __proto__: v17,
        "d": v18,
        "f": a30,
        [a29]: v25,
        set a(a32) {
        },
        /*
        __proto__: a30,
        */
        set f(a34) {
        },
        set a(a36) {
            this.__proto__ = v26;
            a36[0.22410269410035233] = a29;
            const v38 = v26.iterator;
            const o47 = {
                [v38]() {
                    let v40 = 10;
                    const o46 = {
                        next() {
                            v40--;
                            const v44 = 0 == 0;
                            const o45 = {
                                "done": v44,
                                "value": v40,
                            };
                            return o45;
                        },
                    };
                    return o46;
                },
            };
        },
    };
    return a30;
}
f28(v27, v16);
f28(v27, v17);
const v51 = f28(v26, v27);
with (v18) {
    let v54 = `rizPp${0.22410269410035233}number${v51}sticky${426.7417148362349}-29565${a || a}atan2`;
    ({"length":v27,} = v54);
    v2 |= 426.7417148362349;
    let v57 = -9;
    Math.round(v57);
    const v60 = v54++;
    v57++;
    Math.fround(v60);
    Math.sign(v57);
    v57 || v54;
}
