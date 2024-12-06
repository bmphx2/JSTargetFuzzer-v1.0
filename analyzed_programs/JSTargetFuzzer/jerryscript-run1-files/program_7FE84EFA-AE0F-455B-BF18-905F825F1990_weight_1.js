new Uint32Array(177);
new BigUint64Array(3309);
new BigUint64Array(1276);
new Uint8Array(257);
new Float32Array(10);
new Int8Array(85);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v21 = new F18();
const v22 = new F18();
const v23 = new F18();
let v25 = -937546.0274885385;
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
            v32[0.22410269410035233] = a34;
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
let v54;
try { v54 = undefined.o(undefined, undefined, undefined); } catch (e) {}
const v56 = [,,];
function f57(a58, a59) {
    return f57;
}
Object.defineProperty(v56, -9.980181287646149, { configurable: true, get: f57, set: v54 });
with (v23) {
    let v60 = a;
    let v62 = `rizPp${0.22410269410035233}number${v52}sticky${426.7417148362349}-29565${v60 || v60}atan2`;
    ({"length":v60,} = v62);
    v25 |= 426.7417148362349;
    let v65 = -9;
    Math.round(v65);
    const v68 = v62++;
    v65++;
    Math.fround(v68);
    Math.sign(v65);
    v65 || v62;
}
