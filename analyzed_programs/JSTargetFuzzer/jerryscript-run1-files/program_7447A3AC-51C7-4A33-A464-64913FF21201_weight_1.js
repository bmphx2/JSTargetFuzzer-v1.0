function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.f = a6;
    this.c = a6;
}
new F3(F3, 15n);
new F3(15n, 15n);
new F3(F3, 15n);
new Int32Array(84);
const v15 = (a16) => {
    return a16;
};
new Uint8Array(2);
new Int32Array(4);
function F21() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v24 = new F21();
const v25 = new F21();
const v26 = new F21();
let v28 = -937546.0274885385;
const v33 = [-1e-15,1000000.0,v28,v26];
const v34 = [1000000.0,-1e-15,v25,v33,-1e-15];
const v35 = [v26,v28,v26];
class C36 {
    constructor(a38) {
        delete Reflect[4];
    }
}
new C36();
function f42(a43, a44) {
    const o58 = {
        "b": -1e-15,
        ...a44,
        [v35]: v25,
        __proto__: v25,
        "d": v26,
        "f": a44,
        [a43]: v33,
        set a(a46) {
            this.__proto__ = v34;
            v35[0.22410269410035233] = a43;
            const v48 = Symbol.iterator;
            const o57 = {
                [v48]() {
                    let v50 = 10;
                    const o56 = {
                        next() {
                            v50--;
                            const v54 = v50 == 0;
                            const o55 = {
                                "done": v54,
                                "value": v50,
                            };
                            return o55;
                        },
                    };
                    return o56;
                },
            };
        },
    };
    return o58;
}
f42(v35, v24);
f42(v35, v25);
const v61 = f42(v34, v35);
with (v26) {
    let v62 = a;
    let v64 = `rizPp${0.22410269410035233}number${v61}sticky${426.7417148362349}-29565${v62 || v62}atan2`;
    ({"length":v62,} = v64);
    v28 |= 426.7417148362349;
    let v67 = -9;
    Math.round(v67);
    const v70 = v64++;
    v67++;
    Math.fround(v70);
    Math.sign(v67);
    v67 || v64;
}
