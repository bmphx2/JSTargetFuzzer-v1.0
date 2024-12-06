const v2 = new Array(419);
[v2,419];
const v10 = new Float32Array(1556);
const o12 = {
    ...v10,
};
delete o12[1000];
[[v2,1e-15]];
new Int16Array(255);
new Int8Array(1838);
new Int8Array(599);
function F25() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v28 = new F25();
const v29 = new F25();
const v30 = new F25();
let v32 = -937546.0274885385;
const v37 = [-1e-15,1000000.0,v32,v30];
const v38 = [1000000.0,-1e-15,v29,v37,-1e-15];
const v39 = [v30,v32,v30];
function f40(a41, a42) {
    const o56 = {
        "b": -1e-15,
        ...a42,
        [v39]: v29,
        __proto__: v29,
        "d": v30,
        "f": a42,
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
    Math.round(v65);
    const v68 = v62++;
    v65++;
    Math.fround(v68);
    Math.sign(v65);
    v65 || v62;
}
