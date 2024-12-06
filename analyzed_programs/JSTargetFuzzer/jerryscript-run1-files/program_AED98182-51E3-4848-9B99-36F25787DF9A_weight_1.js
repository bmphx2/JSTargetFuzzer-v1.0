new Float64Array(1861);
const v5 = new BigInt64Array(257);
const v8 = new Uint8ClampedArray(257);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const o61 = {
        "b": -1e-15,
        "e": v25,
        __proto__: v16,
        "g": 1861,
        "a": a29,
        "f": Uint8ClampedArray,
        ...a29,
        [v26]: v16,
        /*
        __proto__: v16,
        */
        "d": v17,
        "f": a29,
        [a28]: v24,
        set a(a31) {
            this.__proto__ = v25;
            v26[0.22410269410035233] = a28;
            const v33 = Symbol.iterator;
            const o55 = {
                [v33]() {
                    let v35 = 10;
                    const o54 = {
                        next() {
                            const v37 = v35--;
                            new Float64Array(0, v37, a31);
                            try { a29(a29, v37, 257, this, v35, v37); } catch (e) {}
                            const v42 = Symbol.iterator;
                            const o51 = {
                                [v42]() {
                                    let v44 = 10;
                                    const o50 = {
                                        next() {
                                            v44--;
                                            const v48 = v44 == 0;
                                            const o49 = {
                                                "done": v48,
                                                "value": v44,
                                            };
                                            return o49;
                                        },
                                    };
                                    return o50;
                                },
                            };
                            const v52 = v35 == 0;
                            const o53 = {
                                "done": v52,
                                "value": v35,
                            };
                            return o53;
                        },
                    };
                    return o54;
                },
            };
            const v56 = new Float64Array(Symbol, 257, a29);
            try { new a31(v16, v56, v56, this); } catch (e) {}
            for (let v58 = 0; v58 < 32; v58++) {
                v15["p" + v58] = v58;
            }
        },
    };
    return o61;
}
f27(v5, f27(v26, v15));
v8[9];
v5 in v25;
v19 = 1000000.0;
f27(v26, v16);
const v68 = f27(v25, v26);
with (v17) {
    let v69 = a;
    let v71 = `rizPp${0.22410269410035233}number${v68}sticky${426.7417148362349}-29565${v69 || v69}atan2`;
    ({"length":v69,} = v71);
    v19 |= 426.7417148362349;
    let v74 = -9;
    Math.round(v74);
    const v77 = v71++;
    v74++;
    Math.fround(v77);
    Math.sign(v74);
    v74 || v71;
}
