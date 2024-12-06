function f0() {
    const o6 = {
        __proto__: "-5",
        "f": "-5",
        "d": "-5",
        [0.0](a5) {
            this.f = 0.0;
            a5[this] <<= a5;
            return -3;
        },
        "a": -3,
        7: -3,
        "h": -3,
        2147483649: -3,
    };
    return o6;
}
const v7 = f0();
f0();
f0();
const v10 = async (a11, a12) => {
    a11 = v7;
    let v13;
    try { v13 = a11.sqrt(); } catch (e) {}
    await v13;
    return f0;
};
new Int16Array(2011);
new Int16Array(4007);
new BigInt64Array(9);
function F27() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v30 = new F27();
const v31 = new F27();
const v32 = new F27();
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
const v60 = f42(v41, v31);
const v61 = f42(v40, v41);
with (v32) {
    let v62 = a;
    const v63 = v62 || v62;
    let v64 = `rizPp${0.22410269410035233}number${v61}sticky${426.7417148362349}-29565${v63}atan2`;
    ({"length":v62,} = v64);
    v34 |= 426.7417148362349;
    if (v63) {
        const o67 = {
        };
        new Proxy(v60, o67);
    } else {
        const v71 = [v34,9];
        Reflect.apply(v64.slice, v64, v71);
    }
    let v74 = -9;
    Math.round(v74);
    const v77 = v64++;
    v74++;
    Math.fround(v77);
    Math.sign(v74);
    v74 || v64;
}
