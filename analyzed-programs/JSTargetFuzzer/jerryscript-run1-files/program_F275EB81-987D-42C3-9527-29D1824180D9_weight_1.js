const v0 = [14,-65535,-10,34643,-65535,-5308,-65535,-8];
const v1 = [129,1024];
const v2 = [-2147483649,-1024,2147483647,-9223372036854775808,256];
const v8 = new Uint8Array(7);
const v11 = new Float64Array(1000);
const o13 = {
    "c": v11,
    "e": 4294967297,
    "b": v0,
};
new Int8Array(64);
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
    for (let v19 = 0; v19 < 32; v19++) {
        v8["p" + v19] = v19;
    }
}
const v22 = new F16();
const v23 = new F16();
const v24 = new F16();
let v26 = -937546.0274885385;
v8.__proto__ = v2;
v1.length = 64;
const v34 = [-1e-15,1000000.0,v26,v24];
const v35 = [1000000.0,-1e-15,v23,v34,-1e-15];
const v36 = [v24,v26,v24];
function f37(a38, a39) {
    const o53 = {
        "c": v8,
        ...a39,
        [v36]: v23,
        __proto__: 0.22410269410035233,
        "d": v24,
        "f": a39,
        [a38]: v34,
        set a(a41) {
            this.__proto__ = v35;
            v36[v0] = a38;
            const v43 = Symbol.iterator;
            const o52 = {
                [v43]() {
                    let v45 = 10;
                    const o51 = {
                        next() {
                            v45--;
                            const v49 = v45 == 0;
                            const o50 = {
                                "done": v49,
                                "value": v45,
                            };
                            return o50;
                        },
                    };
                    return o51;
                },
            };
        },
    };
    return o53;
}
f37(v36, v22);
f37(v36, v23);
let v56 = f37(v35, v36);
with (v24) {
    let v59 = `rizPp${0.22410269410035233}number${v56}sticky${426.7417148362349}-29565${a || a}atan2`;
    ({"length":v56,} = v59);
    v26 |= 426.7417148362349;
    let v62 = -9;
    const v64 = Math.round(v62);
    const o69 = {
        valueOf() {
            for (let v66 = 0; v66 < 32; v66++) {
                this["p" + v66] = v66;
            }
            return v64;
        },
    };
    const v70 = v59++;
    v62--;
    Math.fround(v70);
    Math.sign(v62);
    v62 || v59;
}
