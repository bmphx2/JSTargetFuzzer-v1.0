const v0 = [];
function f1() {
    const o12 = {
        "h": v0,
        268435456: v0,
        [v0]: v0,
        set e(a3) {
            const v5 = this === v0 ? this : v0;
            v0.h = v0;
            super.b;
            v5[Symbol.isConcatSpreadable] = v5;
        },
        "a": v0,
        7: v0,
    };
    return o12;
}
const v13 = f1();
const v14 = f1();
const v15 = f1();
function f16(a17, a18) {
    const o30 = {
        [v15](a20, a21, a22, a23) {
            f1 |= f16;
            const v27 = a23 ^ (this >>> a23);
            return ~a23 | v27;
        },
        ...a18,
        268435456: v13,
        "f": v0,
        "d": v14,
        "g": f1,
        "h": a17,
        "b": a18,
        [a17]: f16,
        __proto__: a17,
        "a": f1,
        "e": f16,
        3: a17,
        "a": v13,
        "c": v0,
        /*
        __proto__: v14,
        */
    };
    return o30;
}
f16(v15, v13);
f16(v13, v13);
const v33 = f16(v13, v15);
function F37() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    try {
        Object.defineProperty(this.e, "d", { configurable: true, enumerable: true, get: f16 });
    } catch(e41) {
        v0[7] = this;
    }
    this.a = 1024;
}
const v42 = new F37();
new F37();
const v44 = new F37();
[1801814284,v44,1801814284,v42];
[F37];
[v44,-2];
const v51 = [Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
let v53 = 10;
for (; v53--;) {
    v44.e;
}
const v56 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o57 = {
    "c": v51,
    "f": v13,
    [v51]: v14,
    363755227: f16,
    __proto__: v15,
};
v33.__proto__;
-2 > v51;
const v64 = new Proxy(v56, o57);
const o65 = {
};
new Proxy(v64, o65);
try { F37(); } catch (e) {}
o57.a = v42;
