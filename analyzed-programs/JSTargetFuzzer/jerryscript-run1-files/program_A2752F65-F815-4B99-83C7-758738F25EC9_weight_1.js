const v9 = ["number",1119093048,1119093048,-268435456];
const v11 = [[11],11,"p"];
const v14 = v9 | 11;
v11.length;
const t4 = "p";
t4[Symbol.iterator] = v14;
function F19() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v22 = new F19();
const v23 = new F19();
const v24 = new F19();
let v26 = -937546.0274885385;
const v31 = [-1e-15,1000000.0,v26,v24];
const v32 = [1000000.0,-1e-15,v23,v31,-1e-15];
const v33 = [v24,v26,v24];
function f34(a35, a36) {
    const o59 = {
        "b": -1e-15,
        ...a36,
        [v33]: v23,
        __proto__: v23,
        "d": v24,
        "f": a36,
        [a35]: v31,
        set a(a38) {
            this.__proto__ = v32;
            v33[0.22410269410035233] = a35;
            const v40 = Symbol.iterator;
            const o58 = {
                [v40]() {
                    let v42 = 10;
                    const o54 = {
                        next() {
                            v42--;
                            const v46 = v42 == 0;
                            try { a36(a36); } catch (e) {}
                            delete this[35894];
                            for (let v50 = 0; v50 < 32; v50++) {
                                const t40 = "p";
                                t40["p" + v50] = v50;
                            }
                            const o53 = {
                                "done": v46,
                                "value": v42,
                            };
                            return o53;
                        },
                    };
                    const o55 = {
                        "call": Symbol,
                        "getOwnPropertyDescriptor": f34,
                        "has": Symbol,
                        "ownKeys": Symbol,
                        "preventExtensions": f34,
                        "set": Symbol,
                    };
                    new Proxy(o54, o55);
                    return o54;
                },
            };
        },
    };
    return o59;
}
f34(v33, v22);
f34(v33, v23);
const v62 = f34(v32, v33);
with (v24) {
    let v63 = a;
    let v65 = `rizPp${0.22410269410035233}number${v62}sticky${426.7417148362349}-29565${v63 || v63}atan2`;
    ({"length":v63,} = v65);
    v26 |= 426.7417148362349;
    let v68 = -9;
    Math.round(v68);
    const v71 = v65++;
    v68++;
    Math.fround(v71);
    Math.sign(v68);
    v68 || v65;
}
