new Int32Array(113);
new Uint8Array(64);
const v8 = new Uint8ClampedArray(5);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.e = a11;
}
const v13 = new F9(5, v8);
new F9(64, v13);
new F9(113, F9);
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v22 = new F19();
const v23 = new F19();
const v24 = new F19();
let v26 = -937546.0274885385;
function* f28(a29, a30) {
    return arguments;
    return yield 45279;
}
f28(f28, f28);
class C37 {
    constructor(a39, a40, a41, a42) {
        super.e = a41;
    }
}
new C37(Uint8Array, C37, C37, 58931);
const v46 = [-1e-15,1000000.0,v26,v24];
const v47 = [1000000.0,-1e-15,v23,v46,-1e-15];
const v48 = [v24,v26,v24];
function f49(a50, a51) {
    const o65 = {
        "b": -1e-15,
        ...a51,
        [v48]: v23,
        __proto__: v23,
        "d": a51,
        "f": a51,
        [a50]: v46,
        set a(a53) {
            this.__proto__ = v47;
            v48[a53] = a50;
            const v55 = Symbol.iterator;
            const o64 = {
                [v55]() {
                    let v57 = 10;
                    const o63 = {
                        next() {
                            v57--;
                            v57 == 0;
                            const o62 = {
                                "done": a51,
                                "value": v57,
                            };
                            return o62;
                        },
                    };
                    return -1e-15;
                },
            };
        },
    };
    return o65;
}
f49(v48, v22);
f49(v48, v23);
const v68 = f49(v47, v48);
with (v24) {
    let v69 = a;
    let v71 = `rizPp${0.22410269410035233}number${v68}sticky${426.7417148362349}-29565${v69 || v69}atan2`;
    ({"length":v69,} = v71);
    v26 |= 426.7417148362349;
    let v74 = -9;
    Math.round(v74);
    const v77 = v71++;
    v74++;
    Math.fround(v77);
    Math.sign(v74);
    v74 || v71;
}
