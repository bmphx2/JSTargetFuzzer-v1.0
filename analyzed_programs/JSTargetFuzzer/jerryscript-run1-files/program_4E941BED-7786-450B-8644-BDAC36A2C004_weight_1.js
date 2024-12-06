const v1 = [true,true,true,true];
const v2 = [true,true,v1,true,v1];
const v3 = [v2,v2,true,v2];
new Uint8Array();
function F6() {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = new Uint8Array();
    gc(v9);
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a14;
    this.b = true;
}
const v15 = new F12(v3);
const v16 = new F12(v2);
new F12(v3);
const v18 = [v16,F12,v3,v1];
[v16];
[true];
[v2,v18];
[F12,[v15,F12]];
new Int8Array(255);
new BigUint64Array(1422);
new Float32Array(1300);
function f35(a36, a37) {
    let v39;
    try { v39 = a37(1300, this, a36, 1422, a37); } catch (e) {}
    +v39;
}
new Promise(f35);
new Int8Array(64);
new Uint8ClampedArray(256);
new BigUint64Array(1905);
class C53 {
    o(a55, a56) {
        const t36 = a55 instanceof a55;
        t36[7] = "m";
        var c = a55;
        try {
            super.m();
        } catch(e59) {
        }
        return -6356;
    }
    static 4 = -6356;
    4294967296;
}
let v60 = new C53();
const v61 = new C53();
new C53();
const v64 = new Set();
const v65 = [19167,-1653864233,4];
const v66 = [-14,-9223372036854775808,268435456,1007853335,257,54873,536870912,257];
const v67 = [8,-34566,-1073741824];
v64 == v65 ? v64 : v65;
C53.d = v67;
let v70;
try { v70 = v60(); } catch (e) {}
v64[v70] /= -376497935;
v65[v66] &= -6356;
v60 = v61;
("m").length;
const o72 = {
};
new Proxy(v66, o72);
