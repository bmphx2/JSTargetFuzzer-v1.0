function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2;
}
new F0();
new F0();
const v5 = new F0();
new Number(3);
new Uint32Array(255, v5);
new Int8Array(256);
new Float32Array(3701);
const v20 = new Int32Array();
const v21 = new Int32Array();
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.toStringTag = v21;
    this.e = v20;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o32 = {
    set name(a31) {
    },
};
for (let v33 = 0; v33 < 5; v33++) {
    o32.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v37 = [13,9,-12559,-8,-4294967297];
let v38 = [65535,-1139741600];
new Uint8Array(v37);
let v41 = -41990;
const v42 = v38++;
let v43 = --v41;
function f44() {
    return f44;
}
([-1.7976931348623157e+308,-451396.53673457936,NaN,0.0699370332173953,1e-15,-1000000000.0]).flatMap(TypeError);
--v43 * (v42 | v41);
