function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 12937;
    this.a = 12937;
    this.e = 12937;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o14 = {
        [v4]: F0,
        "d": v5,
        valueOf(a9, a10) {
            const v11 = [a7,a7,this,a7,a9];
            const v12 = [a9,a7];
            [v11,v12,v12,a10,F0];
            return v12;
        },
        7: v5,
        "a": v5,
        "g": v4,
        ...v4,
        ...a7,
        "f": a7,
    };
    return o14;
}
const v15 = f6(v4);
const v16 = f6(v5);
const v17 = f6(v5);
function f21(a22, a23) {
    const o34 = {
        14: F0,
        "a": f6,
        ...a23,
        "d": a23,
        "e": f6,
        get h() {
            function F25(a27, a28, a29, a30) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a29;
                this.c = a30;
                this.e = a23;
            }
            new F25(-9007199254740992n, v16, -9007199254740992n, -9007199254740992n);
            new F25(a22, v15, a22, -9007199254740992n);
            new F25(-9007199254740992n, v17, -16n, 11n);
            return a22;
        },
    };
    return o34;
}
f21(-9007199254740992n, v15);
f21(-16n, v16);
f21(-16n, v17);
new Float32Array(3701);
const v43 = new Int32Array();
const v44 = new Int32Array();
function F45(a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v44;
    this.e = v43;
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
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v60 = [13,9,-12559,-8,-4294967297];
let v61 = [65535,-1139741600];
new Uint8Array(v60);
let v64 = -41990;
const v65 = v61++;
let v66 = --v64;
function f67() {
    return f67;
}
const o73 = {
    set h(a69) {
        ([[]]).toLocaleString(a69, this);
    },
};
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v66 * (v65 << v64);
