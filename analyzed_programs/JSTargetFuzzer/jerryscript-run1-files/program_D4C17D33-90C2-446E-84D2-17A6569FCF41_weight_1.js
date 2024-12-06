new Uint32Array(16);
const v5 = new Float32Array(3831);
const v8 = new Uint8ClampedArray(8);
function f9() {
    return v5;
}
function f10(a11, a12, a13, a14) {
    const o20 = {
        ...v8,
        get g() {
            class C16 {
                static g = 8;
            }
            const v17 = new C16();
            new v17();
            new C16();
            return this;
        },
        "g": Uint32Array,
        "d": v8,
    };
    return o20;
}
f10(16, 16, 16, 8);
f10(3831, 8, 16, 8);
f10(16, 8, 3831, 8);
function F24() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v27 = new F24();
const v28 = new F24();
const v29 = new F24();
let v31 = -937546.0274885385;
const v36 = [v29,1000000.0,v31,v29];
const v37 = [1000000.0,-1e-15,v28,v36,-1e-15];
const v38 = [v29,v31,v29];
function f39(a40, a41) {
    const o55 = {
        "b": -1e-15,
        ...a41,
        [v38]: v28,
        __proto__: v28,
        "d": v29,
        "f": a41,
        [a40]: v36,
        set a(a43) {
            this.__proto__ = v37;
            v38[0.22410269410035233] = a40;
            const v45 = Symbol.iterator;
            const o54 = {
                [v45]() {
                    let v47 = 10;
                    const o53 = {
                        next() {
                            v47--;
                            const v51 = v47 == 0;
                            const o52 = {
                                "done": v51,
                                "value": v47,
                            };
                            return o52;
                        },
                    };
                    return o53;
                },
            };
        },
    };
    return o55;
}
f39(v38, v27);
f39(v38, v28);
const v58 = f39(v37, v38);
with (v29) {
    let v59 = a;
    let v61 = `rizPp${0.22410269410035233}number${v58}sticky${426.7417148362349}-29565${v59 || v59}atan2`;
    ({"length":v59,} = v61);
    v31 |= 426.7417148362349;
    let v64 = -9;
    Math.round(v64);
    v61++;
    v64++;
    Math.fround(Math);
    Math.sign(v64);
    v64 || v61;
}
