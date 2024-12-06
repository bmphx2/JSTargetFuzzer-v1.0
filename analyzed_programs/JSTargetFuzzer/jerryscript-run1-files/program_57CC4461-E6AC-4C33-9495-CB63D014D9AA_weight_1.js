new WeakMap();
let v2 = 1;
new Uint8ClampedArray(v2);
new Int16Array(2801);
new BigInt64Array(7);
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v14 = new WeakMap();
const v15 = new F11();
const v16 = new F11();
let v22 = 1000000.0;
const v23 = [-1e-15,v22,-937546.0274885385,v16];
const v24 = [v22,-1e-15,v15,v23,v22];
const v25 = [v16,-937546.0274885385,v16];
function f26(a27, a28) {
    const o42 = {
        "b": -1e-15,
        ...v22,
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
                    const o40 = {
                        next() {
                            v2--;
                            const v38 = 0 == 0;
                            const o39 = {
                                "done": v38,
                                "value": 10,
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
const v47 = Symbol.toPrimitive;
const o54 = {
    [v47]() {
        function F49(a51, a52, a53) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = "1073741824";
        }
        return "1073741824";
    },
};
const v55 = f26(v24, v25);
with (v16) {
    let v56 = a;
    v56 || Int16Array;
    let v58 = `rizPp${0.22410269410035233}number${v55}sticky${426.7417148362349}-29565${BigInt64Array}atan2`;
    ({"length":v56,} = v58);
    v22 |= v24;
    let v61 = -9;
    Math.round(v61);
    const v64 = v58++;
    v61++;
    Math.fround(v64);
    Math.sign(v61);
    v61 || v58;
}
