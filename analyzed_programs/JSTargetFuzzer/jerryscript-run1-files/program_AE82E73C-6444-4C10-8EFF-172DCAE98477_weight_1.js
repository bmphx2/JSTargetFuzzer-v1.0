const v1 = new Date();
function f2() {
    return v1;
}
function f3() {
    return f2;
}
new Float64Array(8);
new Int16Array(3);
new Uint8ClampedArray(739);
const t10 = [250262812,-9223372036854775808];
delete t10[3];
const v15 = [961555784,65536,65536,-9007199254740990];
const v16 = [9,-65535];
function f17(a18, a19) {
    v16["keys"](...v15);
}
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v28 = new F25();
const v29 = new F25();
const v30 = new F25();
let v32 = -937546.0274885385;
const v37 = [-1e-15,-1000000000000.0,v32,v30];
const v38 = [-1000000000000.0,-1e-15,v29,v37,-1e-15];
const v39 = [v30,v32,v30];
function f40(a41, a42) {
    const o56 = {
        "b": -1e-15,
        ...a42,
        [v39]: v29,
        __proto__: v29,
        "d": v30,
        "f": a42,
        ...a42,
        [a41]: v37,
        set a(a44) {
            this.__proto__ = v38;
            v39[0.22410269410035233] = a41;
            const v46 = Symbol.iterator;
            const o55 = {
                [v46]() {
                    let v48 = 10;
                    const o54 = {
                        next() {
                            v48--;
                            const v52 = v48 == 0;
                            const o53 = {
                                "done": v52,
                                "value": v48,
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
f40(v39, v28);
f40(v39, v29);
const v59 = f40(v38, v39);
with (v30) {
    let v60 = a;
    let v62 = `rizPp${0.22410269410035233}number${v59}sticky${426.7417148362349}-29565${v60 || v60}atan2`;
    ({"length":v60,} = v62);
    v32 |= 426.7417148362349;
    let v65 = -9;
    Math.round(v65, 739);
    const v68 = v62++;
    v65++;
    Math.fround(v68);
    Math.sign(v65);
    v65 || v62;
}
class C73 {
}
("10000")["endsWith"](65535);
