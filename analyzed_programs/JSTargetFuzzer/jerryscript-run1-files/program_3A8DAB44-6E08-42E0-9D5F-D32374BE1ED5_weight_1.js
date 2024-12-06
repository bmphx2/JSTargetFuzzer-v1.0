new Set();
new Uint32Array(7);
const v10 = new Uint32Array(76);
const v13 = new BigUint64Array(8);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v20 = Reflect.apply(Array.of);
const v21 = new F14();
const v22 = new F14();
const v23 = new F14();
let v25 = -937546.0274885385;
const v30 = [-1e-15,1000000.0,v25,v23];
const v31 = [1000000.0,-1e-15,v22,v30,-1e-15];
const v32 = [v23,v25,v23];
function f33(a34, a35) {
    const o54 = {
        "b": -1e-15,
        ...a35,
        [v32]: v22,
        __proto__: v22,
        "d": v23,
        "f": a35,
        [a34]: v30,
        "c": Uint32Array,
        "g": a35,
        "h": BigUint64Array,
        ...a35,
        "e": v30,
        set a(a37) {
            this.__proto__ = v31;
            v32[0.22410269410035233] = a34;
            const v39 = Symbol.iterator;
            const o53 = {
                [v39]() {
                    let v41 = 10;
                    const o52 = {
                        next() {
                            v41--;
                            const v45 = v41 == 0;
                            const o46 = {
                                "done": v45,
                                "value": v41,
                            };
                            for (const v47 of a34) {
                                try { v13.sort(Array); } catch (e) {}
                            }
                            return o46;
                        },
                    };
                    return o52;
                },
            };
        },
    };
    return o54;
}
const t58 = f33(v32, v21);
t58.valueOf = f33;
Array(7);
try { v20(v10, v20); } catch (e) {}
f = Set;
try { v23["valueOf"](Set, v32); } catch (e) {}
f33(v32, v22);
const v61 = f33(v31, v32);
with (v23) {
    let v62 = a;
    let v64 = `rizPp${0.22410269410035233}number${v61}sticky${426.7417148362349}-29565${v62 || v62}atan2`;
    ({"length":v62,} = v64);
    v25 |= 426.7417148362349;
    let v67 = -9;
    Math.round(v67);
    const v70 = v64++;
    v67++;
    Math.fround(v70);
    Math.sign(v67);
    v67 || v64;
}
