function f0() {
}
const v2 = new WeakSet();
function f3(a4, a5) {
    const o20 = {
        "g": a5,
        [f0](a7) {
            a4 = a5;
            a7.toString = f0;
            const v10 = Symbol.iterator;
            const o19 = {
                [v10]() {
                    let v12 = 10;
                    const o18 = {
                        next() {
                            v12--;
                            const v16 = v12 == 0;
                            const o17 = {
                                "done": v16,
                                "value": 0,
                            };
                            return o17;
                        },
                    };
                    return o18;
                },
            };
            return this;
        },
    };
    return o20;
}
f3(v2, WeakSet);
const v22 = f3(f3, f3);
const v23 = f3(v22, v22);
new BigInt64Array(1);
new Int32Array(1172);
new Float32Array(255);
const v38 = new Float32Array(3701);
const v41 = new Int32Array();
const v42 = new Int32Array();
function F43(a45) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v42;
    this.e = v41;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o53 = {
    set a(a52) {
    },
};
for (let v54 = 0; v54 < 5; v54++) {
    o53.a;
}
const v56 = `
    Math.sqrt(-4096);
    let v60 = Math.tanh(1172);
    let v61 = --v60;
    --v61;
`;
eval(v56);
const v65 = [-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v67 = [13,9,-12559,-8,-4294967297];
class C68 extends BigInt64Array {
    [v41] = v65;
    static f = v38;
    static 9;
}
new BigInt64Array();
new C68();
new C68();
let v72 = [65535,-1139741600];
new Uint8Array(v67);
function f75(a76, a77, a78) {
    a78 || a77;
    v23.__proto__;
    return Float32Array;
}
f75(v41, v38, v23);
let v82 = -41990;
const v83 = v72++;
let v84 = --v82;
function f85() {
    return f85;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v84 * (v83 << v82);
