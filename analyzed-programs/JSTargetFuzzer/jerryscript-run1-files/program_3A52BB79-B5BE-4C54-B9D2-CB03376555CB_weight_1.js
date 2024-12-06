new Uint16Array(9);
const v8 = new BigUint64Array(1);
new Float64Array(1024);
const v15 = [-9007199254740992];
const v16 = [-9007199254740992,2.220446049250313e-16,-718179.5782617966,v15,-1];
const v17 = [v16,-1,v16,-1,v16];
function f18() {
    return v16;
}
const v22 = [NaN,898273.0585323321,1.0,-1000000.0];
[1.7976931348623157e+308,0.9026778318027915,-1e-15,4.0];
[1.0,1.7976931348623157e+308,-5.0,-6.994126492370509];
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v28 = new F25();
const v29 = new F25();
function f30(a31, a32, a33) {
    const o34 = {
        "g": v22,
        "e": v8,
    };
    return o34;
}
f30(f30(f30(-1, v15, v16), -718179.5782617966, f30), 5.0, v17);
const v38 = new F25();
let v40 = -937546.0274885385;
const v45 = [-1e-15,1000000.0,v40,v38];
const v46 = [1000000.0,-1e-15,v29,v45,-1e-15];
const v47 = [v38,v40,v38];
function f48(a49, a50) {
    const o64 = {
        "b": -1e-15,
        ...a50,
        [v47]: v29,
        __proto__: v29,
        "d": v38,
        "f": a50,
        [a49]: v45,
        set a(a52) {
            this.__proto__ = v46;
            v47[0.22410269410035233] = a49;
            const v54 = Symbol.iterator;
            const o63 = {
                [v54]() {
                    let v56 = 10;
                    const o62 = {
                        next() {
                            v56--;
                            const v60 = v56 == 0;
                            const o61 = {
                                "done": v60,
                                "value": v56,
                            };
                            return o61;
                        },
                    };
                    return o62;
                },
            };
        },
    };
    return o64;
}
f48(v47, v28);
f48(v47, v29);
const v67 = f48(v46, v47);
with (v38) {
    let v68 = a;
    let v70 = `rizPp${0.22410269410035233}number${v67}sticky${426.7417148362349}-29565${v68 || v68}atan2`;
    ({"length":v68,} = v70);
    v40 |= 426.7417148362349;
    let v73 = -9;
    Math.round(v73);
    const v76 = v70++;
    v73++;
    Math.fround(v76);
    Math.sign(v73);
    v73 || v70;
}
