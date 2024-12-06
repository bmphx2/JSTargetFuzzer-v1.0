new Int32Array(16);
new Float32Array(456);
new BigInt64Array(3);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v21 = new F18();
const v22 = new F18();
const v23 = new F18();
let v25 = -937546.0274885385;
const v30 = [-1e-15,1000000.0,v25,v23];
const v31 = [1000000.0,-1e-15,v22,v30,-1e-15];
const v32 = [v23,v25,v23];
function f33(a34, a35) {
    const o50 = {
        "b": -1e-15,
        ...a35,
        [v32]: v22,
        __proto__: v22,
        "d": v23,
        "f": a35,
        [a34]: v30,
        set a(a37) {
            this.__proto__ = v31;
            v32[0.22410269410035233] = a34;
            const v39 = Symbol.iterator;
            const o48 = {
                [v39]() {
                    let v41 = 10;
                    const o47 = {
                        next() {
                            v41--;
                            const v45 = v41 == 0;
                            const o46 = {
                                "done": v45,
                                "value": v41,
                            };
                            return o46;
                        },
                    };
                    return o47;
                },
            };
            /k2da??a{0}/gisu;
        },
    };
    return o50;
}
f33(v32, v21);
f33(v32, v22);
const v53 = f33(v31, v32);
with (v23) {
    let v54 = a;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${v54 || v54}atan2`;
    new Set([5.0,-Infinity,0.45285535896993423,-1.4180257666535735e+308,0.9733557260586729,0.41911273078751055,NaN]);
    ({"length":v54,} = v56);
    v25 |= 426.7417148362349;
    let v62 = -9;
    Math.round(v62);
    const v65 = v56++;
    v62++;
    Math.fround(v65);
    Math.sign(v62);
    v62 || v56;
}
