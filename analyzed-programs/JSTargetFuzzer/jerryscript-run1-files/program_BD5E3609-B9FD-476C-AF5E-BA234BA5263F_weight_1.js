function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -4294967296;
    this.d = -4294967296;
    const o7 = {
        valueOf() {
            return -4294967296;
        },
    };
    this.h = -4294967296;
}
let v8 = new F0();
new F0();
new F0();
let v14 = 1024;
const v16 = new Int16Array(v14);
const v19 = new Float32Array(2);
new Uint16Array(1024);
class C26 {
    set e(a28) {
        const o29 = {
            "d": "c",
            "a": "h",
            "c": v16,
            ..."c",
        };
        try { a28.getDate(this, "h", "c", o29); } catch (e) {}
    }
    get f() {
        const o36 = {
            valueOf() {
                return "h";
            },
        };
        return this;
    }
}
let v37 = new C26(2, Float32Array);
new C26();
new C26();
const v45 = new Float32Array(1);
new Int32Array(3296);
if (v19 < v45) {
    v8 = C26;
    v8[7] = "-256";
} else {
    const t46 = "-256";
    t46.g = Int32Array;
}
const v52 = new Float32Array(10);
function f53() {
    return v52;
}
v14 >>>= 2;
try { v37.deref(Int32Array, -65537n, f53, -7.664597456571345e+307, -65537n); } catch (e) {}
for (; v37--;) {
    const t56 = "h" instanceof Float32Array;
    t56.f = "-256";
}
