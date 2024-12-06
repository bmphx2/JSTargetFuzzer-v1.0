function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -1040917164;
    const v3 = [461,-33280,65537];
    const v4 = [4,9007199254740991,-1183379087,536870887,-5,-13,16,-1,65537,129];
    v4.length = 256;
    v4.unshift(v3);
}
new F0();
new F0();
new F0();
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v19 = new F16();
const o21 = {
    "b": 0n,
};
let v22 = 0;
while (v22 < 8) {
    v22++;
}
const v26 = new F16();
const v27 = new F16();
let v29 = -937546.0274885385;
const v34 = [-1e-15,1000000.0,v29,v27];
const v35 = [1000000.0,-1e-15,v26,v34,-1e-15];
const v36 = [v27,v29,v27];
function f37(a38, a39) {
    const o59 = {
        "b": -1e-15,
        ...a39,
        [v36]: 0.22410269410035233,
        __proto__: v26,
        "d": v35,
        "f": a39,
        [a38]: v34,
        set a(a41) {
            this.__proto__ = v35;
            let v43;
            try { v43 = new a41(v35, a41, 0.23216608260263827, a41); } catch (e) {}
            const v44 = new v43();
            for (let v45 = 0; v45 < 5; v45++) {
                v44["set"](v45);
            }
            v36[0.22410269410035233] = a41;
            const v49 = Symbol.iterator;
            const o58 = {
                [v19]() {
                    let v51 = 10;
                    const o57 = {
                        next() {
                            v51--;
                            const v55 = v49 == 0;
                            const o56 = {
                                "done": v55,
                                "value": v51,
                            };
                            return o56;
                        },
                    };
                    return o57;
                },
            };
        },
    };
    return o59;
}
f37(v36, v19);
f37(v36, v26);
const v62 = f37(v35, v36);
with (v27) {
    let v63 = a;
    let v65 = `rizPp${0.22410269410035233}number${v62}sticky${v29}-29565${v63 || v63}atan2`;
    ({"length":v63,} = v65);
    v29 |= 426.7417148362349;
    let v68 = -9;
    Math.round(v68);
    const v71 = v65++;
    const v72 = [];
    function f73() {
        return v72;
    }
    try { v72.reduce(f73); } catch (e) {}
    v68++;
    Math.fround(v71);
    Math.sign(v68);
    v68 || v65;
}
