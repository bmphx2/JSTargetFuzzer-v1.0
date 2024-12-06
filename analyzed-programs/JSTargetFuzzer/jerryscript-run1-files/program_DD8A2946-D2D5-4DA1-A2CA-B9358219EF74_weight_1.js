function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 0;
    this.e = 0;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    get f() {
        for (let i9 = 0; i9 < 3; i9++) {
            const o17 = {
                "maxByteLength": 3477,
            };
            const v19 = new ArrayBuffer(128, o17);
            new Int32Array(v19);
        }
        return this;
    }
}
function f22(a23) {
    return a23;
}
class C24 extends f22 {
    h = F0;
}
const v25 = new C6();
const v26 = new C6();
const v27 = new C6();
v3.f;
let v31 = 13492;
C24[109001822] = 4;
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v4;
    this.c = v5;
    this.a = a34;
}
v4.f = v31;
({"e":C6,...v31} = v5);
const v40 = new F32(v4, v26, v3);
new F32(v5, v40, v25);
const v42 = new F32(v25, v25, v27);
-1.0 ^ -4096;
v42 * -4.473924600681509;
