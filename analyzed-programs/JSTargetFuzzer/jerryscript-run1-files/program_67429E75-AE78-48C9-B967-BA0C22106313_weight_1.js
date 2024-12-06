function f0() {
}
function f1() {
    const o5 = {
        [f0]: f0,
        "h": f0,
        [f0]() {
            if (f0 == this) {
                f0();
            } else {
                this.g = this;
            }
            return f0;
        },
    };
    return o5;
}
const v6 = f1();
const v7 = f1();
const v8 = f1();
function f9(a10, a11) {
    const o17 = {
        __proto__: v8,
        "c": v8,
        "d": v6,
        valueOf(a13, a14) {
            this[v7] = f1;
            let v16;
            try { v16 = this.valueOf(v8, a14, a13); } catch (e) {}
            return v16;
        },
        "f": a11,
        1: f0,
    };
    return o17;
}
f9(f1, v7);
f9(v6, v6);
f9(v6, v7);
new Float32Array(3701);
new Uint16Array(1);
const v33 = new Array(9);
const v36 = new Uint32Array(2334);
const v37 = `
    Uint32Array >= Uint32Array;
    let v39;
    try { v39 = v36.join(v37); } catch (e) {}
    v33[v39];
`;
const v42 = new Int32Array();
Array.from(1, Array, Array(Array));
function f46() {
    return f46;
}
const v47 = new Int32Array();
new WeakSet();
const t56 = 3701;
t56.NaN = 23462;
const v52 = new Int16Array(Int16Array);
const v54 = Symbol.toPrimitive;
const v56 = v52.toString;
-10n == ([1.1874236030596237e+308])["lastIndexOf"]();
Reflect.apply(v56, v54);
const v64 = new Int8Array();
v64.forEach(Array);
function F67() {
    if (!new.target) { throw 'must be called with new'; }
}
const v69 = new F67();
const v70 = new F67();
for (let v71 = 0; v71 < 5; v71++) {
    v70.__proto__ = v69;
}
function F72(a74) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v47;
    this.e = v42;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o82 = {
    set a(a81) {
    },
};
for (let v83 = 0; v83 < 5; v83++) {
    o82.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v87 = [13,9,-12559,-8,-4294967297];
let v88 = [65535,-1139741600];
new Uint8Array(v87);
let v91 = -41990;
const v92 = v88++;
let v93 = --v91;
function f94() {
    return f94;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v93 * (v92 << v91);
