const v0 = [];
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v7 = new F4();
const v8 = new F4();
const v9 = new F4();
let v11 = -937546.0274885385;
const v16 = [-1e-15,1000000.0,v11,v9];
const v17 = [1000000.0,-1e-15,v8,v16,-1e-15];
const v18 = [v9,v11,v9];
function f19(a20, a21) {
    const o35 = {
        "b": -1e-15,
        ...a21,
        [v18]: v8,
        __proto__: v8,
        "d": v9,
        "f": a21,
        [a20]: v16,
        set a(a23) {
            this.__proto__ = v17;
            v18[0.22410269410035233] = a20;
            const v25 = Symbol.iterator;
            const o34 = {
                [v25]() {
                    let v27 = 10;
                    const o33 = {
                        next() {
                            v27--;
                            const v31 = v27 == 0;
                            const o32 = {
                                "done": v31,
                                "value": v27,
                            };
                            return o32;
                        },
                    };
                    return o33;
                },
            };
        },
    };
    return o35;
}
f19(v18, v7);
f19(v18, v8);
const v38 = f19(v17, v18);
with (v9) {
    let v39 = a;
    let v41 = `rizPp${0.22410269410035233}number${v38}sticky${426.7417148362349}-29565${v39 || v39}atan2`;
    ({"length":v39,} = v41);
    v11 |= 426.7417148362349;
    let v44 = -9;
    Math.round(v44);
    const v47 = v41++;
    v44++;
    Math.fround(v47);
    Math.sign(v44);
    v44 || v41;
}
let v61 = 2732;
const v63 = new Int8Array(v61);
let v64 = 4026;
new Uint8ClampedArray(v64);
let v69;
try { v69 = v0.some(v0, v0); } catch (e) {}
let v71 = 169;
v71 %= 3818;
function f72(a73) {
    return v71;
}
const v74 = new BigUint64Array(129);
function f75(a76, a77, a78, a79) {
    const o87 = {
        toString(a81, a82) {
            if (a81) {
                super.g = a81;
                for (let v83 = 0; v83 < 32; v83++) {
                    const t80 = "WM";
                    t80["p" + v83] = v83;
                }
            } else {
                const t84 = "h";
                t84[268435440] = a81;
            }
            v74[1073741823] = Int8Array;
            this.length = 0;
            return 0;
        },
        2: BigUint64Array,
        "b": v64,
        "split": a76,
        __proto__: v63,
    };
    o87[o87] = Int8Array;
    v64 = 1623071898;
    a77[8] = -3281;
    v63.__proto__ = a77;
    a76--;
    return o87;
}
f75(129, v64, 129, 129, v69, -9007199254740992n);
f75(v61, v64, v61, 129);
const v91 = f75(v64, v61, v61, v61);
v91[129] = v91[0];
v61 = v64;
new Uint8ClampedArray(256);
new Uint8ClampedArray(3);
new BigInt64Array(3);
