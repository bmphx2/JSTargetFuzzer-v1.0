function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 3;
}
const v3 = new F0();
class C4 {
}
function f5() {
    return f5;
}
class C6 extends f5 {
    constructor(a8, a9) {
        switch (a8) {
            case C4:
                break;
            default:
                break;
        }
    }
}
const v10 = new F0();
const v11 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
    this.h = a15;
    a15.c = a14;
}
new F12(v10, v11);
new F12(v3, v3);
new F12(v11, v3);
let v19 = 1000;
new Float32Array(3701);
const v27 = new Int32Array();
const v28 = new Int32Array();
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v28;
    this.e = v27;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o39 = {
    __proto__: v28,
    38: C6,
    8: v10,
    [-1]: F12,
    "h": v27,
    set a(a38) {
    },
};
for (let v40 = 0; v40 < 5; v40++) {
    o39.a;
}
[-6.568975937209441,1.0,-Infinity];
let v43 = [0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v45 = Symbol.iterator;
const o54 = {
    [v45]() {
        let v47 = 10;
        const o53 = {
            next() {
                v47--;
                const v51 = v47 == 0;
                const o52 = {
                    "done": v51,
                    "value": v47,
                };
                return o52;
            },
        };
        return o53;
    },
};
const v55 = [13,9,-12559,-8,-4294967297];
[65535,-1139741600];
new Uint8Array(v55);
let v59 = -41990;
v43++;
--v59;
function f62() {
    return f62;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
const v66 = --v19;
3701 << v59;
v66 * v43;
