function f3() {
    return 536870888;
}
let v6 = 0.5461591626309513;
v6[10] = 0.5213422509195095;
let v12 = 127;
function F17() {
    if (!new.target) { throw 'must be called with new'; }
    const t8 = "1874635498";
    t8.valueOf = f3;
    this.g = 0.5213422509195095;
    let v22 = -9;
    Math.fround(v12);
    v22++ & v12;
    v12++;
    --v6;
    this.a = -589293468;
}
const v30 = new F17();
const v31 = new F17();
const v32 = new F17();
let v34 = -937546.0274885385;
const v39 = [-1e-15,1000000.0,v34,v32];
const v40 = [1000000.0,-1e-15,v31,v39,-1e-15];
const v41 = [v32,v40,v32];
function f42(a43, a44) {
    const o58 = {
        "b": -1e-15,
        ...a44,
        [v41]: v31,
        __proto__: 2.048897159016724e+307,
        "d": v32,
        "f": a44,
        ["MIN_SAFE_INTEGER"]: v39,
        set a(a46) {
            this.__proto__ = v40;
            v41[0.22410269410035233] = a43;
            const v48 = Symbol.iterator;
            const o57 = {
                [v48]() {
                    let v50 = 10;
                    const o56 = {
                        next() {
                            const v52 = v50--;
                            const v54 = v50 == 0;
                            const o55 = {
                                "done": v54,
                                "value": v50,
                            };
                            return v52;
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
    Math.round(v67);
    const v70 = v64++;
    v67++;
    Math.fround(v70);
    Math.sign(v67);
    v67 || v64;
}
