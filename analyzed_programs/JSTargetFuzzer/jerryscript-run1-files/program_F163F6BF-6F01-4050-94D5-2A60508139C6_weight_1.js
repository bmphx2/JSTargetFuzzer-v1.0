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
class C30 {
    constructor(a32, a33, a34, a35) {
        super.e = a34;
    }
}
new C30(Uint8Array, C30, C30, 58931);
const v39 = [-1e-15,1000000.0,v26,v24];
const v40 = [1000000.0,-1e-15,v23,v39,-1e-15];
const v41 = [v24,v26,v24];
function f42(a43, a44) {
    const o58 = {
        "b": -1e-15,
        ...a44,
        [v41]: v23,
        __proto__: v23,
        "d": a44,
        "f": a44,
        [a43]: v39,
        set a(a46) {
            this.__proto__ = v40;
            v41[0.22410269410035233] = a43;
            const v48 = Symbol.iterator;
            const o57 = {
                [v48]() {
                    let v50 = 10;
                    const o56 = {
                        next() {
                            v50--;
                            v50 == 0;
                            const o55 = {
                                "done": a44,
                                "value": v50,
                            };
                            return o55;
                        },
                    };
                    return o56;
                },
            };
        },
    };
    return o58;
}
f42(v41, v22);
f42(v41, v23);
const v61 = f42(v40, v41);
with (v24) {
    let v62 = a;
    let v64 = `rizPp${0.22410269410035233}number${v61}sticky${426.7417148362349}-29565${v62 || v62}atan2`;
    ({"length":v62,} = v64);
    v26 |= 426.7417148362349;
    let v67 = -9;
    Math.round(v67);
    const v70 = v64++;
    v67++;
    Math.fround(v70);
    Math.sign(v67);
    v67 || v64;
}
