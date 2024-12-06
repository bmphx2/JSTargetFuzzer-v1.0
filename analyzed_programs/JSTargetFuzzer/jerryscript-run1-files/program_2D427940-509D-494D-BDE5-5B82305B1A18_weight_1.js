[14,49782,2147483648,-15,536870888,-401798573,65536,268435456];
[65536,1757226309,51118,14746,64,-44142,268435456,2147483649,64];
[2040923259];
new Int32Array(4096);
new BigInt64Array(2);
new Uint16Array(64);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
let v22 = -937546.0274885385;
const v28 = [1000000.0,-1e-15,v19,[-1e-15,1000000.0,v22,v20],-1e-15];
const v29 = [v20,v22,v20];
function f30(a31, a32) {
    const o46 = {
        "b": -1e-15,
        ...a32,
        [v29]: v19,
        __proto__: v19,
        "d": v20,
        "f": a32,
        [a31]: v29,
        set a(a34) {
            this.__proto__ = v28;
            v29[0.22410269410035233] = a31;
            const v36 = Symbol.iterator;
            const o45 = {
                [v36]() {
                    let v38 = 10;
                    const o44 = {
                        next() {
                            v38--;
                            const v42 = v38 == 0;
                            const o43 = {
                                "done": v42,
                                "value": v38,
                            };
                            return o43;
                        },
                    };
                    return o44;
                },
            };
        },
    };
    return o46;
}
f30(v29, v18);
f30(v29, v19);
const v49 = f30(v28, v29);
with (v20) {
    const v52 = new ArrayBuffer(129);
    new Uint8Array(v52);
    let v55 = a;
    let v57 = `rizPp${0.22410269410035233}number${v49}sticky${426.7417148362349}-29565${v55 || v55}atan2`;
    ({"length":v55,} = v57);
    v22 |= 426.7417148362349;
    let v60 = -9;
    Math.round(v60);
    const v63 = v57++;
    v60++;
    Math.fround(v63);
    Math.sign(v60);
    v60 || 2.048897159016724e+307;
}
