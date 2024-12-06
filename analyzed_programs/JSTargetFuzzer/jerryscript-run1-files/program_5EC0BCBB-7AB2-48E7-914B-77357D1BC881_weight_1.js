function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -256;
    this.d = -256;
    this.b = -256;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(257);
new Uint8ClampedArray(127);
try { BigInt64Array(BigInt64Array, BigInt64Array, BigInt64Array); } catch (e) {}
function f15(a16, a17) {
    const o19 = {
        get b() {
            return a16;
        },
    };
    return o19;
}
const v21 = f15(5, f15());
class C22 extends f15 {
    constructor(a24, a25) {
        super();
        const v26 = `
        `;
        eval(v26);
    }
}
new C22(v21, 5);
new Uint16Array(256);
function F33() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v36 = new F33();
const v37 = new F33();
const v38 = new F33();
let v40 = -937546.0274885385;
const v45 = [-1e-15,1000000.0,v40,v38];
const v46 = [1000000.0,-1e-15,v37,v45,-1e-15];
const v47 = [v38,v40,v38];
function f48(a49, a50) {
    const o64 = {
        "b": -1e-15,
        ...a50,
        [v47]: v37,
        __proto__: v37,
        "d": v38,
        "f": a50,
        [a49]: v45,
        set a(a52) {
            this.__proto__ = v46;
            v47[0.22410269410035233] = a49;
            const v54 = Symbol.iterator;
            const o63 = {
                [v54]() {
                    let v56 = 10;
                    const o62 = {
                        next() {
                            v56--;
                            const v60 = v56 == 0;
                            const o61 = {
                                "done": v60,
                                "value": v56,
                            };
                            return o61;
                        },
                    };
                    return o62;
                },
            };
        },
    };
    return o64;
}
f48(v47, v36);
f48(v47, v37);
const v67 = f48(v46, v47);
with (v38) {
    let v68 = a;
    let v69 = v68 || v68;
    let v70 = `rizPp${0.22410269410035233}number${v67}sticky${426.7417148362349}-29565${v69}atan2`;
    ({"length":v68,} = v70);
    v40 |= 426.7417148362349;
    Math.round(-9);
    const v76 = v70++;
    v69++;
    for (let v78 = 0; v78 < 32; v78++) {
        v36["p" + v78] = v78;
    }
    Math.fround(v76);
    Math.sign(-9);
    -9 || v70;
}
