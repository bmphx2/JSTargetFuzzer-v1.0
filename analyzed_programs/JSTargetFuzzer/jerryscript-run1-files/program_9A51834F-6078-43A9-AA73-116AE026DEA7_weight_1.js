class C3 {
    toString(a5, a6) {
        this.b;
        return 4;
    }
    1;
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function f17(a18, a19, a20, a21) {
    const o36 = {
        "e": v14,
        "h": 256,
        ["d"]: a19,
        "a": a21,
        "g": C3,
        p(a23, a24, a25) {
            const o31 = {
                "maxByteLength": 9,
            };
            const v33 = new SharedArrayBuffer(9, o31);
            new Int8Array(v33);
            return v33;
        },
    };
    return o36;
}
const v37 = f17(C3, C3, v14, v15);
f17(v14, v16, C3, v14);
f17(v14, v15, C3, v16);
function F40() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v43 = new F40();
const v44 = new F40();
const v45 = new F40();
let v47 = -937546.0274885385;
const v52 = [-1e-15,1000000.0,v47,v45];
const v53 = [1000000.0,-1e-15,v44,v52,-1e-15];
const v54 = [v45,v47,v45];
function f55(a56, a57) {
    const o71 = {
        "b": -1e-15,
        ...a57,
        [v54]: v44,
        __proto__: v44,
        "d": v45,
        "f": a57,
        [a56]: v52,
        set a(a59) {
            this.__proto__ = v53;
            v54[0.22410269410035233] = a56;
            const v61 = Symbol.iterator;
            const o70 = {
                [v61]() {
                    let v63 = 10;
                    const o69 = {
                        next() {
                            v63--;
                            const v67 = v63 == 0;
                            const o68 = {
                                "done": v67,
                                "value": v63,
                            };
                            return o68;
                        },
                    };
                    return o69;
                },
            };
        },
    };
    return o71;
}
f55(v37, v43);
f55(v54, v44);
const v74 = f55(v53, v54);
with (v45) {
    let v75 = a;
    let v77 = `rizPp${0.22410269410035233}number${v74}sticky${426.7417148362349}-29565${v75 || v75}atan2`;
    ({"length":v75,} = v77);
    v47 |= 426.7417148362349;
    let v80 = -9;
    Math.round(v80);
    const v83 = v77++;
    v80++;
    Math.fround(v83);
    Math.sign(v80);
    v80 || v77;
}
