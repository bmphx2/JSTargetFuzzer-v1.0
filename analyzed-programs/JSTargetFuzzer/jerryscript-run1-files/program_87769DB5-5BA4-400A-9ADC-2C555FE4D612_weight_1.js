function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4096;
    this.c = -4096;
    this.e = -4096;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.c = a8;
}
const v10 = new F6(v4, v3);
new F6(v10, v4);
new F6(v5, v4);
new BigInt64Array(36);
new BigInt64Array(515);
new BigUint64Array(9);
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v25 = new F22();
const v26 = new F22();
const v27 = new F22();
let v29 = -937546.0274885385;
const v34 = [-1e-15,1000000.0,v29,v27];
const v35 = [1000000.0,-1e-15,v26,v34,-1e-15];
const v36 = [v27,v29,v27];
function f37(a38, a39) {
    const o53 = {
        "b": -1e-15,
        ...a39,
        [v36]: v26,
        __proto__: BigUint64Array,
        "d": v27,
        "f": a39,
        [a38]: v34,
        set a(a41) {
            this.__proto__ = v35;
            v36[0.22410269410035233] = a38;
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
    return v3;
}
f37(f37(v36, v25), v26);
const v56 = f37(v35, v36);
with (v27) {
    let v57 = a;
    let v59 = `rizPp${0.22410269410035233}number${v56}sticky${426.7417148362349}-29565${v57 || v57}atan2`;
    ({"length":v57,} = v59);
    v29 |= 426.7417148362349;
    let v62 = -9;
    Math.round(v62);
    const v65 = v59++;
    v62++;
    Math.fround(v65);
    Math.sign(v62);
    v62 || v59;
}
