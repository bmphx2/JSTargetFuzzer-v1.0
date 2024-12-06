function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -65536;
    this.h = -65536;
    this.c = -65536;
}
new F0();
new F0();
const v5 = new F0();
class C6 {
    g;
    static 3 = v5;
    #valueOf(a8) {
        for (let i10 = 0; i10 < 4; i10++) {
            function f16() {
                return F0;
            }
        }
        return a8;
    }
}
new C6();
new C6();
new C6();
new Float64Array(64);
const v28 = new Float32Array(129);
new Float64Array(128);
const o32 = {
};
new Proxy(v28, o32);
const v38 = [...v28];
for (let v39 = 0; v39 < 32; v39++) {
    v38["p" + v39] = v39;
}
