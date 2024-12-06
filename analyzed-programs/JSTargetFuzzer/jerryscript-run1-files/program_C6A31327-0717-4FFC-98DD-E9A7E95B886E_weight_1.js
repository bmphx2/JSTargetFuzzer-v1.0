function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -9;
}
const v3 = new F0();
new F0(v3, F0);
new F0();
const v8 = new WeakMap();
const v9 = v8.toStringTag;
const o17 = {
    p(a12, a13) {
        a13[1] = 5;
        return this;
    },
    [v9]() {
        const o16 = {
            next() {
                return v8;
            },
        };
    },
};
new WeakSet();
Array.from(1);
([-13,-465622521,22703]).slice();
function f27(a28, a29) {
    const o30 = {
    };
    return o30;
}
new Int32Array(4);
new Uint8ClampedArray(2731);
new Uint32Array(0);
new Float32Array(5);
const v46 = new Int32Array();
const v47 = new Int32Array();
function F48(a50) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v47;
    this.e = v46;
}
new Int32Array(6);
Object(-2147483647n);
const v56 = new Float32Array();
Reflect.isExtensible(v56.sort);
new Float32Array(0);
[-Infinity];
const o65 = {
    set a(a64) {
    },
};
for (let v66 = 0; v66 < 5; v66++) {
    o65.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v70 = [13,9,-12559,-8,-4294967297];
let v71 = [-2147483647];
new Uint8Array(v70, F0);
let v74 = -41990;
const v75 = v71++;
let v76 = --v74;
function F77() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
new F77();
function f81() {
    Symbol.unscopables["toString"]();
    function f86(a87, a88) {
        let v89 = 5n;
        [a87,...v89] = a88;
        return f86;
    }
    new Promise(f86);
    return f81;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
const v95 = --v76;
try { ("VR").substring(-1n); } catch (e) {}
new Date();
v95 * (v75 << v74);
