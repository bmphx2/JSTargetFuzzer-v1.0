function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -5;
    this.c = -5;
    this.b = -5;
}
new F0();
new F0();
new F0();
new Uint8ClampedArray(5);
new Int16Array(1380);
new Uint32Array(9);
new Float32Array(3701);
const v20 = new Int32Array();
const v21 = new Int32Array();
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v21;
    this.e = v20;
}
new Map();
const v29 = new BigUint64Array(108);
v29[2];
new Int32Array(6);
new Float32Array(0);
const v36 = Symbol.iterator;
const o45 = {
    [v36]() {
        let v38 = 10;
        const o44 = {
            next() {
                v38--;
                const v42 = v38 == 0;
                const o43 = {
                    "done": v42,
                    "value": v38,
                    __proto__: this,
                };
                return o43;
            },
        };
        return o44;
    },
};
[-Infinity];
const o49 = {
    set a(a48) {
    },
};
for (let v50 = 0; v50 < 5; v50++) {
    o49.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v54 = [13,9,-12559,-8,-4294967297];
let v55 = [65535,-1139741600];
new Uint8Array(v54);
let v58 = -41990;
for (let v60 = 0; v60 < 5; v60++) {
    try { Reflect.ownKeys(v60); } catch (e) {}
}
const v62 = v55++;
let v63 = --v58;
function f64() {
    return f64;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v63 * (v62 << v58);
