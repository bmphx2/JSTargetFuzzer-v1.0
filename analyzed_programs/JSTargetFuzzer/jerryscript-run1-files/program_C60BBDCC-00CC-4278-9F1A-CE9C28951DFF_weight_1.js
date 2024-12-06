const v1 = new Date();
const v2 = [v1,v1];
const v3 = [v1,v2,v1];
const v4 = [Date,v1,Date,v1,v1];
function f8(a9, a10, a11, a12) {
    const o31 = {
        "b": a12,
        "g": 1073741825n,
        ...v2,
        ...v3,
        [a10]: a11,
        "d": 1n,
        set c(a14) {
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = this;
                this.g = -29296n;
                this.e = this;
            }
            new F15(v1, a11, this);
            new F15(v4, 1073741825n, Date);
            new F15(this, 1n, v3);
            const v24 = [-2147483647];
            const v25 = [-1.0,-0.0,255875.04019054095,1e-15];
            const o26 = {
            };
            const v28 = new Proxy(v25, o26);
            const o29 = {
                __proto__: v28,
            };
            o29[-2147483647] >>>= v24.__proto__;
        },
    };
    return o31;
}
f8(v1, 1n, 1n, v2, v4, v3, v2);
f8(1n, 1n, 1n, f8(f8, 1n, 1073741825n, v3));
new Float32Array(3701);
const v43 = new Int32Array(Int32Array, Float32Array);
const v44 = new Int32Array();
function F45(a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v44;
    this.e = v43;
}
new Int32Array(129);
new Float32Array(0);
[-Infinity];
const o55 = {
    set a(a54) {
    },
};
for (let v56 = 0; v56 < 5; v56++) {
    o55.a;
}
[-6.568975937209441,1.0,-Infinity];
const v59 = [0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v60 = [13,9,-12559,-8,-4294967297];
let v61 = [65535,-1139741600];
new Uint8Array(v60);
let v64 = 44633;
const v65 = v61++;
let v66 = --v64;
function f67() {
    return f67;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError, v59, 1n, f8);
--v66 * (v65 << v64);
