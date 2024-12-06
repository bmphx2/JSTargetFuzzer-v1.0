function f3(a4) {
    const o10 = {
        __proto__: a4,
        [a4]: -65536,
        1221: -65536,
        "a": -9223372036854775808,
        "g": -4294967297,
        set h(a6) {
            const o7 = {
            };
            new Proxy(this, o7);
        },
        "b": -65536,
    };
    return o10;
}
const v11 = f3(-65536);
f3(-9223372036854775808);
const v13 = f3(-4294967297);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a17;
}
new F14(-65536, v13, -65536);
new F14(-9223372036854775808, v11, -9223372036854775808);
new F14(-9223372036854775808, v13, -65536);
new Uint16Array(3233);
new Uint16Array(4);
new Int32Array(1136);
new Float32Array(3701);
const v36 = new Int32Array();
const v37 = new Int32Array();
function F38(a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v37;
    this.e = v36;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o48 = {
    set a(a47) {
    },
};
for (let v49 = 0; v49 < 5; v49++) {
    o48.a;
}
[-6.568975937209441,1.0,-Infinity];
[0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v53 = [13,9,-12559,-8,-4294967297];
let v54 = [65535,-1139741600];
new Uint8Array(v53);
let v57 = -41990;
const v58 = v54++;
let v59 = --v57;
function f60() {
    return f60;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError);
--v59 * (v58 << v57);
