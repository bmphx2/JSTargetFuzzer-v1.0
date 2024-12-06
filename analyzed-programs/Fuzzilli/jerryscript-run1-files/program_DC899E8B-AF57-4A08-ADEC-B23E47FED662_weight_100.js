let v1 = Uint32Array;
const v2 = new v1(3360);
let v5 = new Uint8Array(512);
const v8 = new Int8Array(1000);
class C9 {
    e;
    m(a11, a12) {
        function F13(a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a11;
            this.f = 3360;
        }
        new F13(a11, a11, a11);
        new F13(a12, 512, 3360);
        const v20 = new F13(a11, a11, 1000);
        return v20;
    }
    [v1] = 3360;
    static #b = v5;
    static #f;
}
const v21 = new C9();
new C9();
const v23 = new C9();
let v25 = -17445n;
let v27;
try { v27 = C9.getMinutes(v8, 3360, v2, C9, v21); } catch (e) {}
let v28 = 0;
do {
    v5[2592] >>= v27;
    v28++;
} while (v28 < 3)
({"a":v25,"c":v1,"e":v5,} = v23);
