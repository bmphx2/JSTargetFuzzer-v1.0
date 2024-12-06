function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 10;
    this.d = 10;
    this.e = 10;
}
new F0();
new F0();
new F0();
new Int16Array(178);
new Float32Array(9);
new BigInt64Array(129);
const v23 = new Float32Array(3701);
const v26 = new Int32Array();
v23.e = v26;
const v28 = Symbol.iterator;
const o37 = {
    [v28]() {
        let v30 = 10;
        const o36 = {
            next() {
                v30--;
                const v34 = v30 == 0;
                const o35 = {
                    "done": v34,
                    "value": v30,
                };
                return o35;
            },
        };
        return o36;
    },
};
const v38 = new Int32Array();
function F39(a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v38;
    this.e = v26;
}
new Int32Array(6);
new Float32Array(0);
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
const v59 = v55++;
let v60 = --v58;
function f61() {
    return f61;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v60 * (v59 << v58);
