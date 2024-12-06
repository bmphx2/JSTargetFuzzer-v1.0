new Set();
new Uint32Array(7);
new Uint32Array(76);
new BigUint64Array(8);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
Reflect.apply(Array.of);
const v21 = new F14();
const v22 = new F14();
const v23 = new F14();
let v25 = -937546.0274885385;
const v30 = [-1e-15,1000000.0,v25,v23];
const v31 = [1000000.0,-1e-15,v22,v30,-1e-15];
const v32 = [v23,v25,v23];
function f33(a34, a35) {
    const o49 = {
        "b": -1e-15,
        ...a35,
        [v32]: v22,
        __proto__: v22,
        "d": v23,
        "f": a35,
        [a34]: v30,
        set a(a37) {
            this.__proto__ = v31;
            v32[0.22410269410035233] = a34;
            const v39 = Symbol.iterator;
            const o48 = {
                [v39]() {
                    let v41 = 10;
                    const o47 = {
                        next() {
                            v41--;
                            const v45 = v41 == 0;
                            const o46 = {
                                "done": v45,
                                "value": v41,
                            };
                            return o46;
                        },
                    };
                    return o47;
                },
            };
        },
    };
    return o49;
}
f33(v32, v21);
f33(v32, v22);
const v52 = f33(v31, v32);
with (v23) {
    let v53 = a;
    let v55 = `rizPp${0.22410269410035233}number${v52}sticky${426.7417148362349}-29565${v53 || v53}atan2`;
    ({"length":v53,} = v55);
    v25 |= 426.7417148362349;
    let v58 = -9;
    Math.round(v58);
    const v61 = v55++;
    v58++;
    Math.fround(v61);
    Math.sign(v58);
    v58 || v55;
}
