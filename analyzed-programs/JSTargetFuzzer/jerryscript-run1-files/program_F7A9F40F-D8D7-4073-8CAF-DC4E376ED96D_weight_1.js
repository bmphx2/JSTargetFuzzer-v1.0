function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1000;
    this.d = 1000;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v4;
    this.d = a15;
    this.e = -1.7976931348623157e+308;
}
new F12(v5, 1e-15);
const v17 = new F12(v5, -4);
const v18 = new F12(v5, v17);
new Float32Array(3701);
const v24 = new Int32Array();
const v25 = new Int32Array();
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v25;
    this.e = v24;
}
new Int32Array(3701);
new Float32Array(0);
[-Infinity];
const o36 = {
    set a(a35) {
    },
};
for (let v37 = 0; v37 < 5; v37++) {
    o36.a;
    class C39 {
    }
    class C40 extends C39 {
    }
    const v41 = new C40();
    function f42(a43, a44, a45, a46) {
        const o48 = {
            get c() {
                return a45;
            },
        };
        return C39;
    }
    Object.defineProperty(f42(C39, f42, C39, v18), "c", { configurable: true, enumerable: true, value: v41 !== f42 });
}
[-6.568975937209441,1.0,-Infinity];
let v52 = [0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
[13,9,-12559,-8,-4294967297];
new Uint8Array([65535,-1139741600]);
let v57 = -41990;
const v58 = v52++;
let v59 = --v57;
function f60() {
    return Uint8Array;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v59 * (v58 << v57);
