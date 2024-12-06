const v0 = /(?:a{5,1000000}){3,1000000}(?:a+)?/gsum;
const v1 = /Y9(ab|cde)(x)(x)(x)\3*/su;
const v2 = /foo(?=bar)bazb3/y;
const v4 = new Set();
function f5(a6, a7) {
    const o28 = {
        2277: v0,
        "a": a6,
        [v4]: a6,
        "e": v1,
        "b": a6,
        "c": a6,
        [v2](a9, a10) {
            const v12 = v2.iterator;
            const o27 = {
                [v12]() {
                    let v14 = 10;
                    const o26 = {
                        next() {
                            v14--;
                            const v18 = v14 == 0;
                            const o25 = {
                                "done": v18,
                                "value": v14,
                                [this](a20, a21, a22) {
                                    try {
                                        super.getInt32(a6);
                                    } catch(e24) {
                                    }
                                    return a9;
                                },
                            };
                            return o25;
                        },
                    };
                    return o26;
                },
            };
            return a10;
        },
    };
    return o28;
}
const v29 = f5(v2, v2);
const v30 = f5(v0, f5);
const v31 = f5(v29, v30);
function F33(a35, a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v31;
    this.a = v0;
}
const v39 = new F33(v30, v29, v2, v29);
new F33(v29, v30, v39, v31);
new F33(v29, v31, v30, v29);
new Float32Array(3701);
new Int32Array();
const v48 = new Int32Array();
function F49(a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v48;
    this.e = v1;
}
new Int32Array(6);
const v55 = new Float32Array(0);
[-Infinity];
const o59 = {
    set a(a58) {
    },
};
for (let v60 = 0; v60 < 5; v60++) {
    o59.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const o64 = {
    __proto__: v55,
    ...v2,
    "d": v39,
    [v4]: v1,
};
const v65 = [13,9,-12559,-8,-4294967297];
let v66 = [65535,-1139741600];
new Uint8Array(v65);
let v69 = -41990;
const v70 = v66++;
let v71 = --v69;
function f72() {
    return f72;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v71 * (v70 << v69);
