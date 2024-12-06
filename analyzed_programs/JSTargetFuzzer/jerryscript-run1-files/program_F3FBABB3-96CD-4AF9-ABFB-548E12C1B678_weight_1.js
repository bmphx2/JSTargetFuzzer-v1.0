const v2 = new Int32Array(3793);
const v5 = new Int16Array(6);
const v8 = new BigInt64Array(4);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
function f24(a25, a26, a27) {
    const o28 = {
        "b": a26,
        "d": v2,
        __proto__: v5,
        ...v15,
        42: v8,
        ...a25,
    };
    return a26;
}
new Promise(f24);
const v31 = [-1e-15,1000000.0,v19,v17];
const v32 = [1000000.0,-1e-15,v16,v31,-1e-15];
const v33 = [v17,v19,v17];
function f34(a35, a36) {
    const o50 = {
        "b": -1e-15,
        ...a36,
        [v33]: v16,
        __proto__: v16,
        "d": v17,
        "f": a36,
        [a35]: v31,
        set a(a38) {
            a36.__proto__ = v32;
            v33[0.22410269410035233] = a35;
            const v40 = Symbol.iterator;
            const o49 = {
                [v40]() {
                    let v42 = 10;
                    const o48 = {
                        next() {
                            v42--;
                            const v46 = v42 == 0;
                            const o47 = {
                                "done": v46,
                                "value": v42,
                            };
                            return this;
                        },
                    };
                    return o48;
                },
            };
        },
    };
    return o50;
}
f34(v33, v15);
f34(v33, v16);
const v53 = f34(v32, v33);
with (v17) {
    let v54 = a;
    const v55 = v54 || v54;
    let v56 = `rizPp${0.22410269410035233}number${v53}sticky${426.7417148362349}-29565${v55}atan2`;
    ({"length":v54,} = v56);
    v19 |= 1000000.0;
    let v59 = -9;
    Math.round(v59);
    v56++;
    Math.fround(v59++);
    Math.sign(v55);
    v59 || v56;
}
