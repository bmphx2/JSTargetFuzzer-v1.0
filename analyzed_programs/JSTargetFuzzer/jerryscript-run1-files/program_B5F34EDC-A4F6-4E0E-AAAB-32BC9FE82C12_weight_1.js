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
        return v4;
    }
    [v3];
    [v5] = v4;
    [F0] = v3;
    static 939;
    static [v5] = v5;
}
const v13 = new C6();
const v14 = new C6();
const v15 = new C6();
function f19(a20, a21, a22, a23) {
    const o30 = {
        1: a21,
        "b": a22,
        get e() {
            new C6();
            a21 << v14;
            return v4;
        },
        536870912: v13,
        "g": a21,
        "h": "tmrT",
        [F0]: a20,
        "d": v3,
    };
    return o30;
}
const v31 = f19(v15, v5, v4, "tmrT");
f19(v31, v4, v3, "657457364", v14, v31);
f19(v14, v31, v31, "string");
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v37 = new F34();
const v38 = new F34();
const v39 = new F34();
let v41 = -937546.0274885385;
const v46 = [-1e-15,1000000.0,v41,v39];
const v47 = [1000000.0,-1e-15,v38,v46,-1e-15];
const v48 = [v39,v41,v39,426.7417148362349,-1e-15,v41];
function f49(a50, a51) {
    const o65 = {
        "b": -1e-15,
        ...a51,
        [v48]: v38,
        __proto__: v38,
        "d": v37,
        "f": a51,
        [a50]: v46,
        set a(a53) {
            a53.__proto__ = v47;
            v48[0.22410269410035233] = a50;
            const v55 = Symbol.iterator;
            const o64 = {
                [v55]() {
                    let v57 = 10;
                    const o63 = {
                        next() {
                            v57--;
                            const v61 = v57 == 0;
                            const o62 = {
                                "done": v61,
                                "value": v57,
                            };
                            return o62;
                        },
                    };
                    return o63;
                },
            };
        },
    };
    return o65;
}
f49(v48, v37);
f49(v48, v38);
const v68 = f49(v47, v48);
with (v37) {
    let v69 = a;
    let v71 = `rizPp${0.22410269410035233}number${v68}sticky${426.7417148362349}-29565${v69 || v69}atan2`;
    ({"length":v69,} = v71);
    v41 |= 426.7417148362349;
    let v74 = 255;
    Math.round(v74);
    const v77 = v71++;
    v74++;
    Math.fround(v77);
    Math.sign(v69);
    v74 || v71;
}
