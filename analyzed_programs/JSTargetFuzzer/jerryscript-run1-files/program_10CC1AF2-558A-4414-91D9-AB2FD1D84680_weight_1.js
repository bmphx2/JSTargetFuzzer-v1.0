function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
}
const v8 = new F4(536870889, -20600);
const v9 = new F4(536870889, 4);
const v10 = new F4(-20600, 4);
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
    this.c = 536870889;
}
new F11(v10, 4);
new F11(v8, 4);
new F11(v9, -20600);
new Float32Array(3701);
const v23 = new Int32Array();
const v24 = new Int32Array();
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v24;
    this.e = v23;
}
new Int32Array(6);
function f29() {
    const o36 = {
        "a": 434997.50268014264,
        "b": 434997.50268014264,
        p(a33, a34) {
            return a33.valueOf(this, this);
        },
        ..."hasInstance",
    };
    return o36;
}
f29();
let v38 = -16;
const v40 = new BigUint64Array();
const v41 = new BigUint64Array(v40);
const o43 = {
    valueOf() {
        return v41;
    },
};
v38 = o43;
const v44 = f29();
const o45 = {
    "construct": f29,
};
new Proxy(v44, o45);
new Float32Array(0);
[-Infinity];
const o54 = {
    set a(a53) {
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
const v64 = v60++;
let v65 = --v63;
function f66() {
    return f66;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v65 * (v64 << v63);
