function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -1;
    this.g = -1;
    this.d = -1;
}
const v3 = new F0();
new F0();
new F0();
class C6 {
    d;
    static o(a8) {
        switch (v3) {
            default:
                Object.defineProperty(this, 2363312046, { writable: true, enumerable: true, value: this });
                break;
        }
        return -5;
    }
}
new C6();
new C6();
new C6();
const v23 = new Uint8Array(4);
let v24 = 4096;
new Float32Array(v24);
new Float64Array(2510);
v23.length = 7;
try { (7).some(Uint8Array); } catch (e) {}
let v35 = (1073741825).length;
v35 = 536870912;
for (let i37 = 0; i37 < 3; i37++) {
    v24 = i37;
    1.7976931348623157e+308 ^ 536870912;
    const v48 = +-45998;
    Math.atan(1.7976931348623157e+308);
    Math.exp(536870912);
    Math.exp(v48);
    Math.clz32(-45998);
    Math.expm1(9);
}
