new Map();
const v3 = new WeakMap();
new WeakSet();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v3;
}
new F10(1000n, 43757n, 1000n);
new F10(1000n, 536870912n, 43757n);
const v17 = new F10(536870912n, 43757n, 536870912n);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v21 = new F18();
const v22 = new WeakSet();
const v23 = new F18();
let v25 = -937546.0274885385;
let v27 = 0.22410269410035233;
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
            v32[v27] = a34;
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
let v53 = Int8Array;
const v56 = new Uint8Array(2);
for (const v57 in v56) {
    v57 + v53;
    v53++;
}
with (v23) {
    let v60 = a;
    const v61 = v60 || v60;
    let v62 = `rizPp${v27}number${v52}sticky${426.7417148362349}-29565${v61}atan2`;
    ({"length":v60,} = v62);
    v25 |= 426.7417148362349;
    v17[156] = v61;
    -v3;
    v27++;
    v61.f = v62.length;
    let v68 = -9;
    Math.round(v68);
    const v71 = v62++;
    v68++;
    Math.fround(v71);
    Math.sign(v68);
    v68 || v62;
}
