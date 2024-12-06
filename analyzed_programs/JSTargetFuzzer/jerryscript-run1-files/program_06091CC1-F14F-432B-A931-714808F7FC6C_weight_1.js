function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static get c() {
        function* f8(a9) {
            const v10 = [];
            v10[v3] = v10;
            yield a9;
            return this;
        }
        f8(this);
        for (let v13 = 0; v13 < 32; v13++) {
            v5["p" + v13] = v13;
        }
        return v4;
    }
    [v3];
    [v5] = v4;
    [F0] = v3;
    static 939;
    static [v5] = v5;
    static toString(a17, a18) {
        C6 = this;
        256 || 512;
        const v23 = v5 / 256;
        -v5;
        return v23 + 256;
    }
}
const v26 = new C6();
const v27 = new C6();
const v28 = new C6();
function f32(a33, a34, a35, a36) {
    const o43 = {
        1: a34,
        "b": a35,
        get e() {
            new C6();
            a34 << v27;
            return v4;
        },
        536870912: v26,
        "g": a34,
        "h": "tmrT",
        [F0]: a33,
        "d": v3,
    };
    return o43;
}
const v44 = f32(v28, v27, v4, "tmrT");
f32(v44, v4, v3, "657457364", v27, v44);
f32(v27, v44, v44, "string");
function F47() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v50 = new F47();
const v51 = new F47();
const v52 = new F47();
let v54 = -937546.0274885385;
const v59 = [-1e-15,1000000.0,v54,v52];
const v60 = [1000000.0,-1e-15,v51,v59,-1e-15];
const v61 = [v52,v54,v52,426.7417148362349,-1e-15,v54];
function f62(a63, a64) {
    const o78 = {
        "b": a63,
        ...a64,
        [v61]: v51,
        __proto__: "string",
        "d": v50,
        "f": a64,
        [a63]: v59,
        set a(a66) {
            a66.__proto__ = v60;
            v61[0.22410269410035233] = a63;
            const v68 = Symbol.iterator;
            const o77 = {
                [v68]() {
                    let v70 = 10;
                    const o76 = {
                        next() {
                            v70--;
                            const v74 = v70 == 0;
                            const o75 = {
                                "done": v74,
                                "value": v70,
                            };
                            return o75;
                        },
                    };
                    return o76;
                },
            };
        },
    };
    return o78;
}
f62(v61, v50);
f62(v61, v51);
const v81 = f62(v60, v61);
with (v50) {
    let v82 = a;
    const v83 = v82 || v82;
    let v84 = `rizPp${0.22410269410035233}number${v81}sticky${426.7417148362349}-29565${v83}atan2`;
    ({"length":v82,} = v84);
    v54 |= 426.7417148362349;
    let v87 = 255;
    function f89(a90, a91) {
        const o92 = {
            __proto__: v83,
            "d": v4,
        };
        return o92;
    }
    f89(8.62115359329939e+307, v52);
    f89(8.62115359329939e+307, v44);
    f89(1000000.0, v5);
    Math.round(v87);
    const v97 = v84++;
    v87++;
    Math.fround(v97);
    Math.sign(v82);
    v87 || v84;
}
