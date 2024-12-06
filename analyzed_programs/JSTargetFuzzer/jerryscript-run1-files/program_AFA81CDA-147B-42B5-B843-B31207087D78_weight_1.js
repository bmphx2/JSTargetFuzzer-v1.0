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
const v11 = new Int16Array(1380);
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
                const v40 = v38--;
                const v42 = v38 == 0;
                const o43 = {
                    "done": v42,
                    [F22]: v40,
                    "d": 3701,
                    "g": v11,
                    "e": 0,
                    0: 0,
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
const o54 = {
    set a(a48) {
        try { a48(this, this); } catch (e) {}
        ("-268435456").length;
    },
};
for (let v55 = 0; v55 < 5; v55++) {
    o54.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v59 = [13,9,-12559,-8,-4294967297];
let v60 = [65535,-1139741600];
new Uint8Array(v59);
let v63 = -41990;
for (let v65 = 0; v65 < 5; v65++) {
    try { Reflect.ownKeys(v65); } catch (e) {}
}
const v67 = v60++;
let v68 = --v63;
function f69() {
    return f69;
}
const v70 = [-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914];
v70.flatMap(TypeError);
const v73 = --v68;
v70[Symbol.isConcatSpreadable] = v70;
v73 * (v67 << v63);
