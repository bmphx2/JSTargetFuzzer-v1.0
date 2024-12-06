const v3 = [14532,-53892,128,-53892];
const v4 = [v3,-53892,14532,-53892];
const v5 = [v4,14532,128];
class C6 {
    d;
    static [v5] = v3;
    static 3 = v3;
    [-53892] = v4;
    get h() {
        const v10 = Symbol.iterator;
        const o23 = {
            [v10]() {
                let v12 = 10;
                const o22 = {
                    next() {
                        let v14;
                        try { v14 = Symbol.keyFor(this); } catch (e) {}
                        this[v3] = v14;
                        try { C6(14532, v4); } catch (e) {}
                        super.f;
                        v12--;
                        const v20 = v12 == 0;
                        const o21 = {
                            "done": v20,
                            "value": v12,
                        };
                        return o21;
                    },
                };
                return o22;
            },
        };
        return v5;
    }
}
const v24 = new C6();
new C6();
new C6();
function F30() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v33 = new F30();
const v34 = new F30();
const v35 = new F30();
let v37 = -937546.0274885385;
const v42 = [-1e-15,1000000.0,v37,v35];
const v43 = [1000000.0,-1e-15,v34,v42,-1e-15];
let v44 = [v35,v37,v35];
function f45(a46, a47) {
    const o63 = {
        "b": -1e-15,
        ...a47,
        [v44]: v34,
        __proto__: v34,
        "d": v35,
        "f": a47,
        [a46]: v42,
        set a(a49) {
            this.__proto__ = v43;
            v44[0.22410269410035233] = a46;
            const v51 = Symbol.iterator;
            const o62 = {
                [v51]() {
                    let v53 = 10;
                    const o59 = {
                        next() {
                            v53--;
                            const v57 = v53 == 0;
                            const o58 = {
                                "done": v57,
                                "value": v53,
                            };
                            return o58;
                        },
                    };
                    for (const v60 of v5) {
                        function f61() {
                            return a47;
                        }
                    }
                    return o59;
                },
            };
        },
    };
    return o63;
}
const v64 = f45(v44, v33);
f45(v44, v34);
const v66 = f45(v43, v44);
with (v35) {
    let v67 = a;
    let v68 = v67 || v67;
    let v69 = `rizPp${0.22410269410035233}number${v66}sticky${426.7417148362349}-29565${v68}atan2`;
    ({"length":v67,} = v69);
    v37 |= 426.7417148362349;
    v68 = v69;
    f45(-9007199254740991, v69);
    let v76 = -9;
    Math.round(v76);
    const v79 = v69++;
    v76++;
    const v81 = Math.fround(v79);
    v33.length = 9;
    Object.defineProperty(v64, "g", { set: f45 });
    let v83;
    try { v83 = v24.n(v81, F30); } catch (e) {}
    [v44,...v83] = v4;
    Math.sign(v76);
    v76 || v69;
}
