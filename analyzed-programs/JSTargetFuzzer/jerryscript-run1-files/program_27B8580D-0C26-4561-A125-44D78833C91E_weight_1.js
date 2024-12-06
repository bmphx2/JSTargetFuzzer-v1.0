function f0() {
}
const v1 = [f0];
const v2 = [v1];
const v3 = [v2,v2,v2,v2];
const v4 = [f0,v1,v2,v3];
[v4,[v1,v1],v4,f0];
new WeakSet();
function f12(a13, a14) {
    const o38 = {
        [a13]: v3,
        valueOf(a16, a17, a18, a19) {
            v2.__proto__ = a17;
            const v21 = a18.iterator;
            const o37 = {
                [v21]() {
                    let v23 = 10;
                    const o36 = {
                        next() {
                            super.e = this;
                            for (let v25 = 0; v25 < 32; v25++) {
                                this["p" + v25] = v25;
                            }
                            const v28 = v23--;
                            v23 == 0;
                            const o35 = {
                                "done": v2,
                                o(a32, a33) {
                                    f0();
                                    super.e = a32;
                                    return v28;
                                },
                                "value": v23,
                            };
                            return o35;
                        },
                    };
                    return o36;
                },
            };
            return v4;
        },
    };
    return o38;
}
f12(5, -1821352525);
f12(-1821352525, v4);
f12(5, 15);
new Float32Array(3701);
const v47 = new Int32Array();
const v48 = new Int32Array();
function F49(a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v48;
    this.e = v47;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o59 = {
    set a(a58) {
    },
};
for (let v60 = 0; v60 < 5; v60++) {
    o59.a;
}
[-6.568975937209441,1.0,-Infinity];
const v63 = [0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v64 = [13,9,-12559,-8,-4294967297];
let v65 = [65535,-1139741600];
new Uint8Array(v64);
let v68 = -41990;
v3[42] = v64;
const o70 = {
};
new Proxy(v63, o70);
const v73 = v65++;
let v74 = --v68;
function f75() {
    return f75;
}
[-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914];
v3.flatMap(TypeError);
--v74 * (v73 << v68);
