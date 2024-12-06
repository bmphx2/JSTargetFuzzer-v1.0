const v1 = new Date();
function f2() {
    return v1;
}
function f3() {
    return f2;
}
new Float64Array(8);
new Int16Array(3);
new Uint8ClampedArray(739);
const t10 = [250262812,-9223372036854775808];
delete t10[3];
const v15 = [961555784,65536,65536,-9007199254740990];
let v17 = -8n;
v17 &= -2025638265n;
const v18 = [9,-65535];
function f19(a20, a21) {
    v18["keys"](...v15);
}
function F27() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v30 = new F27();
const v31 = new F27();
const v32 = new F27();
let v34 = -937546.0274885385;
const v39 = [-1e-15,-1000000000000.0,v34,v32];
const v40 = [-1000000000000.0,-1e-15,v31,v39,-1e-15];
const v41 = [v32,v34,v32];
function f42(a43, a44) {
    const o58 = {
        "b": -1e-15,
        ...a44,
        [v41]: v31,
        __proto__: v31,
        "d": v32,
        "f": a44,
        ...a44,
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
                            const v54 = v50 == 0;
                            const o55 = {
                                "done": v54,
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
f42(v41, v30);
f42(v41, v31);
const v61 = f42(v40, v41);
with (v32) {
    let v62 = a;
    let v64 = `rizPp${0.22410269410035233}number${v61}sticky${426.7417148362349}-29565${v62 || v62}atan2`;
    ({"length":v62,} = v64);
    v34 |= 426.7417148362349;
    let v67 = -9;
    Math.round(v67, 739);
    const v70 = v64++;
    v67++;
    Math.fround(v70);
    Math.sign(v67);
    v67 || v64;
}
class C75 {
}
("10000")["endsWith"](65535);
