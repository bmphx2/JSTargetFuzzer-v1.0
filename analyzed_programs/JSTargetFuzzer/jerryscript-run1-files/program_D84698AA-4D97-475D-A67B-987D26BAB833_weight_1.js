new ArrayBuffer();
let v6 = -9007199254740992n;
v6 ^= 48735n;
new ReferenceError(255);
new Uint8Array(8);
new Uint16Array(3);
new Float32Array(3701, Float32Array, 11);
const v24 = new Int32Array(8, 3701);
const v25 = new Int32Array();
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v25;
    this.e = v24;
    class C29 {
        constructor(a31, a32) {
            super.f;
        }
    }
    new C29();
}
new Int32Array(1);
new Float32Array(0);
[-Infinity];
const o47 = {
    set a(a41) {
        function F42() {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F42();
        const v46 = new Uint32Array();
        v46[5] = this;
    },
};
for (let v48 = 0; v48 < 5; v48++) {
    o47.a;
}
[-6.568975937209441,1.0,-Infinity];
[878.4539422756106,-763.2988492159809,-8.598207898525445,1000000000000.0,850846.3664210255];
const v52 = [13,9,-12559,-8,-4294967297];
let v53 = [65535,-1139741600];
new Uint8Array(v52);
let v56 = -41990;
const v57 = v53++;
let v58 = --v56;
function f59() {
    return f59;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v58 * (v57 << v56);
