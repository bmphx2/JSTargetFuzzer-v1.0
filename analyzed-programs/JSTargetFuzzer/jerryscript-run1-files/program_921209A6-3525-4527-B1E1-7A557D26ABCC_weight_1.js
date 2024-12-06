function f0() {
}
function f1() {
    return f0;
}
new Uint8Array(12);
new Uint8Array(0);
new BigInt64Array(8);
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v17 = new F14();
const v18 = new F14();
const v19 = new F14();
let v21 = -937546.0274885385;
const v26 = [-1e-15,1000000.0,v21,v19];
const v27 = [1000000.0,-1e-15,v18,v26,-1e-15];
const v28 = [v19,v21,v19];
function f29(a30, a31) {
    const o45 = {
        "b": -1e-15,
        ...a31,
        [v28]: v18,
        __proto__: v18,
        "d": v19,
        "f": a31,
        [a30]: v26,
        set a(a33) {
            this.__proto__ = v27;
            v28[0.22410269410035233] = a30;
            const v35 = Symbol.iterator;
            const o44 = {
                [v35]() {
                    let v37 = 10;
                    const o43 = {
                        next() {
                            ++v37;
                            const v41 = v37 == 0;
                            const o42 = {
                                "done": v41,
                                "value": v37,
                            };
                            return o42;
                        },
                    };
                    return o43;
                },
            };
        },
    };
    return o45;
}
f29(v28, v17);
f29(v28, v18);
const v48 = f29(v27, v28);
with (v19) {
    let v49 = a;
    let v51 = `rizPp${0.22410269410035233}number${v48}sticky${426.7417148362349}-29565${v49 << v49}atan2`;
    ({"length":v49,} = v51);
    v21 |= 426.7417148362349;
    let v54 = -9;
    Math.round(v54);
    const v57 = v51++;
    v54++;
    Math.fround(v57);
    Math.sign(v54);
    v54 || v51;
}
