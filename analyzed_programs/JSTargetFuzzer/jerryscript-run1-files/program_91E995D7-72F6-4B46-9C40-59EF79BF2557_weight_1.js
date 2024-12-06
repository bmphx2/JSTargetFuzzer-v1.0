const v1 = new Map();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a4;
}
new F2(Map);
new F2(v1);
new F2(F2);
new Uint8ClampedArray(10);
new Uint16Array(127);
new Int8Array(64);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v23 = new F20();
const v24 = new F20();
const v25 = new F20();
let v27 = -937546.0274885385;
const v32 = [-1e-15,1000000.0,v27,v25];
const v33 = [1000000.0,-1e-15,v24,v32,-1e-15];
const v34 = [v25,v27,v25];
function f35(a36, a37) {
    const o56 = {
        "b": -1e-15,
        ...a37,
        [v34]: v24,
        __proto__: v24,
        "d": v25,
        "f": a37,
        [a36]: v32,
        set a(a39) {
            this.__proto__ = v33;
            v34[0.22410269410035233] = a36;
            let v40 = Symbol;
            const v41 = v40.iterator;
            const o55 = {
                [v41]() {
                    let v43 = 10;
                    let {"a":v44,"f":v45,} = this;
                    426.7417148362349 < v41;
                    let v48 = new Map();
                    ({"b":v40,...v48} = v45);
                    const o54 = {
                        next() {
                            v43--;
                            const v52 = v43 == 0;
                            const o53 = {
                                "done": v52,
                                "value": v43,
                            };
                            return o53;
                        },
                    };
                    return o54;
                },
            };
        },
    };
    return o56;
}
f35(v34, v23);
f35(v34, v24);
const v59 = f35(v33, v34);
with (v25) {
    let v60 = a;
    let v62 = `rizPp${0.22410269410035233}number${v59}sticky${426.7417148362349}-29565${v60 || v60}atan2`;
    ({"length":v60,} = v62);
    v27 |= 426.7417148362349;
    let v65 = -9;
    Math.round(v65);
    const v68 = v62++;
    v65++;
    Math.fround(v68);
    Math.sign(v65);
    v65 || v62;
}
