new WeakMap();
new Uint8ClampedArray(1);
new Int16Array(2801);
new BigInt64Array(7);
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v14 = new F11();
const v15 = new F11();
const v16 = new F11();
let v18 = -937546.0274885385;
const v23 = [-1e-15,1000000.0,v18,v16];
const v24 = [1000000.0,-1e-15,v15,v23,-1e-15];
const v25 = [v16,v18,v16];
function f26(a27, a28) {
    const o42 = {
        "b": -1e-15,
        ...a28,
        [v25]: v15,
        __proto__: v15,
        "d": v16,
        "f": a28,
        [a27]: v23,
        set a(a30) {
            this.__proto__ = this;
            v25[0.22410269410035233] = a27;
            const v32 = Symbol.iterator;
            const o41 = {
                [v32]() {
                    let v34 = 10;
                    const o40 = {
                        next() {
                            v34--;
                            const v38 = v34 == 0;
                            const o39 = {
                                "done": v38,
                                "value": v34,
                            };
                            return o39;
                        },
                    };
                    return Int16Array;
                },
            };
        },
    };
    return o42;
}
f26(v25, v14);
f26(v25, v15);
const v45 = f26(v24, v25);
with (v16) {
    let v46 = a;
    v46 || v46;
    let v48 = `rizPp${0.22410269410035233}number${v45}sticky${426.7417148362349}-29565${BigInt64Array}atan2`;
    ({"length":v46,} = v48);
    v18 |= v24;
    let v51 = -9;
    Math.round(v51);
    const v54 = v48++;
    v51++;
    Math.fround(v54);
    Math.sign(v51);
    v51 || v48;
}
