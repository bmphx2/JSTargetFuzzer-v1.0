const v1 = new WeakSet();
const v2 = [2.220446049250313e-16,4.670199260311742e+307,-1000000000000.0,-5.341568899217528e+307];
const v3 = [-1.7976931348623157e+308,Infinity,-Infinity,5.525873078182467];
const v4 = [5.053491563270224,1.3454878111989568e+308,0.11385708015266838];
const v5 = [v4,v4,v3,v3,v2];
const v7 = [[v3,v5,v2,v2,v5],v4,WeakSet,v2,v4];
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v14 = new F11();
const v15 = new F11();
const v16 = new F11();
const v23 = [-1e-15,1000000.0,-937546.0274885385,v15];
const v24 = [1000000.0,-1e-15,v15,v23,-1e-15];
const v25 = [v16,-937546.0274885385,v16];
function f26(a27, a28) {
    const o54 = {
        "b": -1e-15,
        ...a28,
        [v25]: v15,
        __proto__: v15,
        "d": v16,
        "h": v7,
        2535: 0.22410269410035233,
        1024: a27,
        "e": v23,
        "a": v23,
        "f": a28,
        [a27]: v23,
        set a(a30) {
            this.__proto__ = v24;
            v25[0.22410269410035233] = a27;
            const v32 = Symbol.iterator;
            const o53 = {
                [v32]() {
                    let v34 = 10;
                    const o52 = {
                        next() {
                            function f36() {
                                return v1;
                            }
                            new Uint16Array(11);
                            new Promise(Promise);
                            new Float32Array(535);
                            new BigInt64Array(3);
                            v34--;
                            const v50 = v34 == 0;
                            const o51 = {
                                "done": v50,
                                "value": v2,
                            };
                            return o51;
                        },
                    };
                    return o52;
                },
            };
        },
    };
    return o54;
}
f26(v25, v14);
f26(v25, v15);
const v57 = f26(v24, v25);
with (v16) {
    let v58 = a;
    let v60 = `rizPp${0.22410269410035233}number${v57}sticky${426.7417148362349}-29565${v58 || v58}atan2`;
    ({"length":v58,} = v60);
    v58 |= 426.7417148362349;
    let v63 = -9;
    Math.round(v63);
    v60++;
    Math.fround(v63++);
    Math.sign(v63);
    v63 || v60;
}
