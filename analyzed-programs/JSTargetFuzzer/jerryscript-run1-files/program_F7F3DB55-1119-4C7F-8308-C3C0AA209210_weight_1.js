new Uint32Array(177);
new BigUint64Array(3309);
new BigUint64Array(1276);
new Uint8Array(257);
new Float32Array(10);
new Int8Array(85);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
    let v21 = 0;
    while (v21 < 8) {
        v21++;
    }
}
const v27 = new Float64Array();
v27[Symbol.unscopables] = Uint32Array;
const v30 = new F18();
const v31 = new F18();
const v32 = new F18();
let v34 = -937546.0274885385;
const v39 = [-1e-15,1000000.0,v34,v32];
const v40 = [1000000.0,-1e-15,v31,v39,-1e-15];
const v41 = [v32,v34,v32];
function f42(a43, a44) {
    const o58 = {
        "b": -1e-15,
        ...a44,
        [v41]: v31,
        __proto__: v31,
        "d": v32,
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
let v63;
try { v63 = undefined.o(undefined, undefined, undefined); } catch (e) {}
const v65 = [,,];
function f66(a67, a68) {
    return f66;
}
Object.defineProperty(v65, -9.980181287646149, { configurable: true, get: f66, set: v63 });
with (v32) {
    let v69 = a;
    let v71 = `rizPp${0.22410269410035233}number${v61}sticky${426.7417148362349}-29565${v69 || v69}atan2`;
    ({"length":v69,} = v71);
    v34 |= 426.7417148362349;
    let v74 = -9;
    Math.round(v74);
    const v77 = v71++;
    v74++;
    Math.fround(v77);
    Math.sign(v74);
    v74 || v71;
}
