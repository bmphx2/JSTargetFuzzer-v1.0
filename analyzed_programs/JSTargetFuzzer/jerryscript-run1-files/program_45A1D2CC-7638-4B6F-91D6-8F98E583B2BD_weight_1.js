[];
let v2 = Int16Array;
new v2(15);
new Uint8Array(95);
new BigUint64Array(8);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    -(-4294967297n);
    this.a = -589293468;
}
const v18 = new F13();
const v19 = new F13();
const v20 = new F13();
const v27 = [-1e-15,1000000.0,-937546.0274885385,v20];
const v28 = [1000000.0,-1e-15,v19,v27,-1e-15];
let v29 = [v20,-937546.0274885385,v20];
function f30(a31, a32) {
    const o50 = {
        "b": 95,
        ...a32,
        [v29]: v19,
        __proto__: v19,
        "d": v20,
        "f": a32,
        [a31]: v27,
        set a(a34) {
        },
        /*
        __proto__: a32,
        */
        set f(a36) {
        },
        set a(a38) {
            this.__proto__ = v28;
            a38[0.22410269410035233] = a31;
            const v40 = v28.iterator;
            const o49 = {
                [v40]() {
                    let v42 = 10;
                    const o48 = {
                        next() {
                            v42--;
                            const v46 = 0 == 0;
                            const o47 = {
                                "done": v46,
                                "value": v42,
                            };
                            return o47;
                        },
                    };
                    return o48;
                },
            };
        },
    };
    return a32;
}
f30(v29, v18);
f30(v29, v19);
const v53 = f30(v28, v29);
with (v20) {
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${a || a}atan2`;
    ({"length":v29,} = v56);
    v2 |= 426.7417148362349;
    let v59 = -9;
    Math.round(v59);
    const v62 = v56++;
    v59++;
    Math.fround(v62);
    Math.sign(v59);
    v59 || v56;
}
