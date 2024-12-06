function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.f = a6;
    this.c = a6;
}
const v7 = new F3(F3, 15n);
const v8 = new F3(15n, 15n);
const v9 = new F3(F3, 15n);
new Int32Array(84);
const v15 = (a16) => {
    return a16;
};
new Uint8Array(2);
new BigUint64Array(4);
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
new Uint8Array(v9, 2, 4);
Object.defineProperty(v33, 2, { enumerable: true, set: v15 });
new Uint8Array(C36);
const v44 = [-1.8731708806137586e+307,0.0,-0.0,1000000000.0,-1.0];
[-4.0,-2.2250738585072014e-308,Infinity,2.220446049250313e-16];
[-703.0776965799932,0.20890109172470883,-1.0,-921.5725806751716,-5.0];
new C36();
function f48(a49, a50) {
    const o67 = {
        "b": -1e-15,
        ...a50,
        [v35]: v25,
        __proto__: v25,
        "d": v26,
        "f": a50,
        [a49]: v33,
        set a(a52) {
            Object.defineProperty(v44, 116, { set: v15 });
            v26[this] = this;
            const o53 = {
                "defineProperty": v15,
            };
            new Proxy(this, o53);
            this.__proto__ = v34;
            v35[0.22410269410035233] = a49;
            const v57 = Symbol.iterator;
            const o66 = {
                [v57]() {
                    let v59 = 10;
                    const o65 = {
                        next() {
                            v59--;
                            const v63 = v59 == 0;
                            const o64 = {
                                "done": v63,
                                "value": v59,
                            };
                            return o64;
                        },
                    };
                    return o65;
                },
            };
        },
    };
    return o67;
}
f48(v35, v24);
f48(v35, v25);
const v70 = f48(v34, v35);
with (v26) {
    let v71 = a;
    const v72 = v71 || v71;
    let v73 = `rizPp${0.22410269410035233}number${v70}sticky${426.7417148362349}-29565${v72}atan2`;
    ({"length":v71,} = v73);
    v28 |= 426.7417148362349;
    let v76 = -9;
    const v78 = Math.round(v76);
    const v79 = v73++;
    v76++;
    const v81 = Math.fround(v79);
    function F82(a84, a85, a86) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = a85;
        this.c = v81;
        this.f = a85;
    }
    const v87 = new F82(v8, v72, v28);
    new F82(v7, v24, v78);
    new F82(C36, v87, -1073741824n);
    Math.sign(v76);
    v76 || v73;
}
