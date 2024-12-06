let v4 = "number";
v4.__proto__ = "Zb";
const v5 = !"Zb";
const t2 = "Zb";
t2.toString = -65536;
typeof v5 === "boolean";
const v13 = [4,2147483647];
[v13,-65536,"Zb",-809550676];
[-809550676,-809550676];
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
v4 = "raw";
const v21 = Symbol.iterator;
const o30 = {
    [v21]() {
        let v23 = 10;
        const o29 = {
            next() {
                v23--;
                const v27 = v23 == 0;
                const o28 = {
                    "done": v27,
                    "value": v23,
                };
                return o28;
            },
        };
        return o29;
    },
};
const v31 = new F16();
const v32 = new F16();
const v33 = new F16();
let v35 = -937546.0274885385;
const v40 = [-1e-15,1000000.0,v35,v33];
const v41 = [1000000.0,-1e-15,v32,v40,-1e-15];
const v42 = [v33,v35,v33,v35,-9007199254740992];
function f43(a44, a45) {
    const o61 = {
        "b": -1e-15,
        ...a45,
        [v42]: v32,
        __proto__: v32,
        "d": v33,
        "f": a45,
        [a44]: v40,
        set a(a47) {
            this.__proto__ = v41;
            this[426.7417148362349] = this;
            try {
                super.trimLeft(this, this);
            } catch(e49) {
            }
            v42[0.22410269410035233] = a44;
            const v51 = Symbol.iterator;
            const o60 = {
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
                    return o59;
                },
            };
        },
    };
    return o61;
}
f43(v42, v31);
f43(v42, v32);
const v64 = f43(v41, v42);
with (v33) {
    for (let v65 = 0; v65 < 32; v65++) {
        v13["p" + v65] = v65;
    }
    let v68 = a;
    let v70 = `rizPp${0.22410269410035233}number${v64}sticky${426.7417148362349}-29565${v68 || v68}atan2`;
    ({"length":v68,} = v70);
    v35 |= 426.7417148362349;
    let v73 = -9;
    Math.round(v73);
    const v76 = v70++;
    v73++;
    Math.fround(v76);
    Math.sign(v73);
    v73 || v70;
}
