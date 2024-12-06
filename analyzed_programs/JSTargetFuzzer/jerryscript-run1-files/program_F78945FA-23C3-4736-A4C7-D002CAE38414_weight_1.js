function f0() {
}
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v16 = new F13();
const v17 = new F13();
const v18 = new F13();
let v20 = -937546.0274885385;
const v25 = [-1e-15,1000000.0,v20,v18];
const v26 = [1000000.0,-1e-15,v17,v25,-1e-15];
const v27 = [v18,v20,v18];
function f28(a29, a30) {
    const o44 = {
        "b": -1e-15,
        ...8,
        [v27]: 2.048897159016724e+307,
        __proto__: v17,
        "d": v18,
        "f": a30,
        [a29]: v25,
        set a(a32) {
            this.__proto__ = 8;
            v27[0.22410269410035233] = a29;
            a32.iterator;
            const o43 = {
                [v16]() {
                    let v36 = 10;
                    const o42 = {
                        next() {
                            v36--;
                            v36 == 0;
                            const o41 = {
                                "done": f28,
                                "value": v36,
                            };
                            return o41;
                        },
                    };
                    return o42;
                },
            };
        },
    };
    return o44;
}
f28(v27, v16);
f28(v27, v17);
const v47 = f28(v26, v27);
with (v18) {
    let v48 = a;
    let v50 = `rizPp${0.22410269410035233}number${v47}sticky${426.7417148362349}-29565${v48 || v48}atan2`;
    ({"length":v48,} = v50);
    v20 |= 426.7417148362349;
    let v54 = 8.62115359329939e+307;
    Math.round(-9);
    const v56 = v50++;
    v54++;
    Math.fround(v56);
    Math.sign(-9);
    -9 || v50;
}
