function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 5;
    this.a = 5;
    this.b = 5;
    const o3 = {
    };
    new Proxy(F0, o3);
    new Proxy(this, this);
}
const v7 = new F0();
new F0();
new F0();
function f10() {
    return v7;
}
new Uint16Array(5);
new BigUint64Array(206);
new BigUint64Array(1233);
new Int8Array(255);
const v28 = new BigUint64Array(1422);
let v29 = 1300;
v29 = 255;
let [v33] = v28;
new Float32Array(v29);
function f38(a39, a40) {
    let v42;
    try { v42 = a40(v29, this, a39, 1422, a40); } catch (e) {}
    +v42;
}
new Promise(f38);
new Int8Array(64);
new Uint8ClampedArray(256);
new BigUint64Array(1905);
class C56 {
    o(a58, a59) {
        const t36 = a58 instanceof a58;
        t36[7] = "m";
        var c = a58;
        try {
            super.m();
        } catch(e62) {
        }
        return -6356;
    }
    static 4 = -6356;
    4294967296;
}
let v63 = new C56();
const v64 = new C56();
new C56();
const v67 = new Set();
const v68 = [19167,-1653864233,4];
const v69 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
const v70 = [8,-34566,-1073741824];
v67 == v68 ? v67 : v68;
C56.d = v70;
let v73;
try { v73 = v63(); } catch (e) {}
v67[v73] /= -376497935;
v68[v69] &= -6356;
v63 = v64;
("m").length;
const o75 = {
};
new Proxy(v69, o75);
