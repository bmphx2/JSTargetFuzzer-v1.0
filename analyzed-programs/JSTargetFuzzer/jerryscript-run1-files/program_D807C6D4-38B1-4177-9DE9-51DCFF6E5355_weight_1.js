const v5 = new Int16Array(64);
new Float32Array(34);
new BigInt64Array(42);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
let v22 = -937546.0274885385;
const v27 = [-1e-15,1000000.0,v22,v20];
const v28 = [1000000.0,-1e-15,v19,v27,-1e-15];
const v29 = [v20,v22,v20];
function f30(a31, a32) {
    const o54 = {
        "b": -1e-15,
        ...a32,
        [v29]: v19,
        ...a32,
        get c() {
            a31[2] = v29;
            return this;
        },
        __proto__: v19,
        "d": v20,
        "f": a32,
        [a31]: v27,
        set a(a35) {
            this.__proto__ = v28;
            v29[0.22410269410035233] = a31;
            const v37 = Symbol.iterator;
            const o53 = {
                [0.22410269410035233](a39, a40) {
                    v19.a;
                    this.valueOf = f30;
                    return 0.22410269410035233;
                },
                [v37]() {
                    let v43 = 10;
                    const o49 = {
                        next() {
                            v43--;
                            const v47 = v43 == 0;
                            const o48 = {
                                "done": v47,
                                "value": v43,
                            };
                            return o48;
                        },
                    };
                    const o50 = {
                        "has": f30,
                        "isExtensible": f30,
                        "ownKeys": f30,
                        "preventExtensions": Symbol,
                        "set": Symbol,
                    };
                    new Proxy(v5, o50);
                    return o49;
                },
            };
        },
    };
    return o54;
}
f30(v29, v18);
f30(v29, v19);
const v57 = f30(v28, v29);
with (v20) {
    let v58 = a;
    let v59 = v58 || v58;
    let v60 = `rizPp${0.22410269410035233}number${v57}sticky${426.7417148362349}-29565${v59}atan2`;
    ({"length":v58,} = v60);
    v22 |= 426.7417148362349;
    let v61;
    try { v61 = v59(BigInt64Array, 2.048897159016724e+307, 42, v22, 38349); } catch (e) {}
    v18.a **= v61;
    v59 **= v61;
    try { v60.substring(64, 38349); } catch (e) {}
    function f63() {
        return 0.22410269410035233;
    }
    let v66 = -9;
    Math.round(v66);
    const v69 = v60++;
    v66++;
    Math.fround(v69);
    Math.sign(v66);
    v66 || v60;
}
