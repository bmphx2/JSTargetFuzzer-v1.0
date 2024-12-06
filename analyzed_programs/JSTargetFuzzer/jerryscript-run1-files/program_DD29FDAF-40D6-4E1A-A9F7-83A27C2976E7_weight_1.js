const v0 = [2.418920828007291];
const v1 = [-1000000000000.0,-4.0,Infinity,1000.0,-1.4892142114519084e+308,0.07298762486609789,-Infinity];
const v2 = [2.220446049250313e-16,-1.9267340634045294,3.5629301982608894e+307,-436.9586367474369,-1000000000000.0];
const v3 = [-65537,2,0,-77813285];
const v4 = [13,-9,536870889,294867608,1073741824,29821,129,16];
const v5 = [646275819,653275356,-25676,-6920,41900,57992,14,-56840];
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v0;
}
new F6(v3, v1, v0);
const v12 = new F6(v2, v4, v3);
new F6(v5, v0, v12);
function F17() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v20 = new F17();
const v21 = new F17();
++F6;
class C23 {
    get(a25, a26) {
    }
}
const v27 = new F17();
let v31 = 0.22410269410035233;
const v34 = [-1e-15,1000000.0,-937546.0274885385,v27];
const v35 = [1000000.0,-1e-15,v21,v34,-1e-15];
const v36 = [v27,-937546.0274885385,v27];
function f37(a38, a39) {
    const o53 = {
        "b": -1e-15,
        ...a39,
        [v36]: v21,
        __proto__: v21,
        "d": v27,
        "f": a39,
        [a38]: v34,
        set a(a41) {
            this.__proto__ = v35;
            v36[v31] = a38;
            const v43 = Symbol.iterator;
            const o52 = {
                [v43]() {
                    let v45 = 10;
                    const o51 = {
                        next() {
                            v45--;
                            const v49 = v45 == 0;
                            const o50 = {
                                "done": v49,
                                "value": v45,
                            };
                            return o50;
                        },
                    };
                    return o51;
                },
            };
        },
    };
    return o53;
}
f37(v36, v20);
f37(v36, v21);
const v56 = f37(v35, v36);
with (v27) {
    let v57 = a;
    let v59 = `rizPp${v31}number${v56}sticky${426.7417148362349}-29565${v57 || v57}atan2`;
    ({"length":v57,} = v59);
    v31 |= 426.7417148362349;
    let v62 = -9;
    Math.round(v62);
    const v65 = v59++;
    v62++;
    Math.fround(v65);
    Math.sign(v62);
    v62 || v59;
}
