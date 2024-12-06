[-305333204,-10,4294967295];
[-9,-1673943708,0,-8,16,-39925,268435441,256];
[-4096,3,512,9,64,-308139523,-53605,-65535,15,-256];
const v6 = [20908,256,1768608275,9,-56889,-479849319,412649054,536870888];
[10,55887,7,1700376227];
[13838,-10,-16,268435439,1024];
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
    const o47 = {
        "b": -1e-15,
        ...a29,
        [v26]: v16,
        __proto__: v16,
        "d": v17,
        "f": a29,
        [a28]: v24,
        set a(a31) {
            this.__proto__ = v25;
            v26[0.22410269410035233] = a28;
            const v33 = Symbol.iterator;
            const o46 = {
                [v33]() {
                    let v35 = 10;
                    const o45 = {
                        next() {
                            v35--;
                            const v39 = v35 == 0;
                            function f43() {
                                return 1000000.0;
                            }
                            const o44 = {
                                "done": v39,
                                "value": v35,
                            };
                            return o44;
                        },
                        [v33]: 62927,
                        5: this,
                        3: -1e-15,
                        "g": v35,
                        "b": v35,
                    };
                    return o45;
                },
            };
        },
    };
    return o47;
}
f27(v26, v15);
f27(v26, v16);
const v50 = f27(v25, v26);
with (v17) {
    let v51 = a;
    const v52 = v51 || v51;
    let v53 = `rizPp${0.22410269410035233}number${v50}sticky${426.7417148362349}-29565${v52}atan2`;
    ({"length":v51,} = v53);
    v19 |= 426.7417148362349;
    let v56 = -9;
    Math.round(v56);
    const v59 = v53++;
    v56++;
    let v61;
    try { v61 = v52(v56, v50, 1073741825); } catch (e) {}
    const v62 = v26 * v61;
    let v63;
    try { v63 = new v61(f27, ...v6, -1487147530, v62, 8.62115359329939e+307, v62); } catch (e) {}
    v61 = Math;
    for (let v64 = 0; v64 < 32; v64++) {
        function f65(a66, a67) {
            const o68 = {
                __proto__: v6,
            };
            return o68;
        }
        f65(f65, v63);
        f65(v25, v6);
        f65(8.62115359329939e+307, v6);
        Math["p" + v64] = v64;
    }
    Math.fround(v59);
    Math.sign(v56);
    v56 || v53;
}
