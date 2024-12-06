const v0 = [];
new Int16Array(10);
new Int32Array(257);
new Uint32Array(14);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
    this.f = v0;
}
new F10(14, 257, 257, 14);
new F10(257, 257, 10, 10);
new F10(257, 10, 10, 14);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v22 = new F19();
const v23 = new F19();
const v24 = new F19();
let v26 = -937546.0274885385;
const v31 = [-1e-15,1000000.0,v26,v24];
const v32 = [1000000.0,-1e-15,v23,v31,-1e-15];
const v33 = [v24,v26,v24];
function f34(a35, a36) {
    const o50 = {
        "b": -1e-15,
        ...a36,
        [v33]: v23,
        __proto__: v23,
        "d": v24,
        "f": a36,
        [a35]: v31,
        set a(a38) {
            this.__proto__ = v32;
            v33[0.22410269410035233] = a35;
            const v40 = Symbol.iterator;
            const o49 = {
                [v40]() {
                    let v42 = 10;
                    const o48 = {
                        next() {
                            v42--;
                            const v46 = v42 == 0;
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
    return o50;
}
f34(v33, v22);
f34(v33, v23);
const v53 = f34(v32, v33);
with (v24) {
    let v54 = a;
    const v55 = v54 || v54;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${v55}atan2`;
    ({"length":v54,} = v56);
    v26 |= 426.7417148362349;
    const v60 = [-14,-1731844252,7,-6,10,11,2147483649];
    const v62 = [-268435456];
    Reflect.apply(v60.lastIndexOf, v55, v62);
    let v65 = -9;
    Math.round(v65);
    const v68 = v56++;
    v65++;
    Math.fround(v68);
    Math.sign(v65);
    v65 || v56;
}
