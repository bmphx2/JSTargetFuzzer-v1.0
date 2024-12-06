const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.b = a4;
}
let v6 = new F2(v1, Map);
const v7 = new F2(F2, v1);
const v8 = new F2(v6, v1);
function f9(a10, a11, a12, a13) {
    const o19 = {
        get h() {
            v6[8];
            let v17;
            try { v17 = a12["n"](a10, Map); } catch (e) {}
            v6 *= v17;
            let v18;
            try { v18 = v17(a12, "n", v17); } catch (e) {}
            return v18;
        },
        [a10]: a10,
        __proto__: v7,
    };
    return o19;
}
f9(v6, v6, v6, v7);
f9(v8, v7, v6, v7);
f9(v7, v8, v6, v8);
new Int8Array(255);
new BigUint64Array(1422);
new Float32Array(1300);
function f34(a35, a36) {
    let v38;
    try { v38 = a36(1300, this, a35, 1422, a36); } catch (e) {}
    +v38;
}
new Promise(f34);
new Int8Array(64);
new Uint8ClampedArray(256);
new BigUint64Array(1905);
class C52 {
    o(a54, a55) {
        const t42 = a54 instanceof a54;
        t42[7] = "m";
        var c = a54;
        try {
            super.m();
        } catch(e58) {
        }
        return -6356;
    }
    static 4 = -6356;
    4294967296;
}
let v59 = new C52();
const v60 = new C52();
new C52();
const v63 = new Set();
const v64 = [19167,-1653864233,4];
const v65 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
const v66 = [8,-34566,-1073741824];
const v67 = v63 == v64;
v67 ? v63 : v64;
C52.d = v66;
let v69;
try { v69 = v67(); } catch (e) {}
v63[v69] /= -376497935;
v64[v65] &= -6356;
v59 = v60;
("m").length;
const o71 = {
};
new Proxy(v65, o71);
