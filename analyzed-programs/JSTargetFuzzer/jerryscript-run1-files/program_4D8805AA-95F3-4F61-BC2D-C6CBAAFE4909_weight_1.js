function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -536870912;
    this.e = a6;
}
const v7 = new F3(8, F3);
const v8 = new F3(-536870912, 8);
const v9 = new F3(8, 48000);
function f10(a11, a12) {
    const o21 = {
        [F3](a14, a15) {
            try { this.m(a12, this, a12, a15); } catch (e) {}
            const o17 = {
                "get": f10,
                "getOwnPropertyDescriptor": f10,
                "getPrototypeOf": f10,
                "ownKeys": f10,
                "set": f10,
            };
            new Proxy(this, o17);
            return a11;
        },
        "c": a11,
        "f": a12,
        get h() {
            v7[6] *= 48000;
            a12.__proto__ = v8;
            return this;
        },
        "b": a11,
        [8]: a12,
        "a": F3,
        [a11]: a12,
        ...v8,
        ...v7,
        __proto__: a12,
        "d": v7,
        "e": a11,
        ...v8,
    };
    return o21;
}
f10(f10(f10(F3, v7), v9), v8);
new Float32Array(3701);
const v33 = new Int32Array();
const v34 = new Int32Array();
function F35(a37) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v34;
    this.e = v33;
}
if (F35) {
    typeof v34 === "boolean";
} else {
    const o43 = {
        "maxByteLength": 8,
    };
    const v45 = new ArrayBuffer(1, o43);
    new Int8Array(v45);
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o55 = {
    set a(a54) {
    },
};
for (let v56 = 0; v56 < 5; v56++) {
    o55.a;
    Promise["reject"](64);
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v64 = [13,9,-12559,-8,-4294967297];
let v65 = [65535,-1139741600];
new Uint8Array(v64);
let v68 = -41990;
const v69 = v65++;
let v70 = --v68;
function f71() {
    return f71;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v70 * (v69 << v68);
