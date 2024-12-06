class C3 {
    static set d(a5) {
        a5.__proto__ = a5;
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.f = 7;
            this.a = a5;
            this.c = a9;
        }
        new F6(48889, 7);
        new F6(7, 7);
        new F6(48889, 7);
    }
}
new C3();
const v14 = new C3();
const v15 = new C3();
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a18;
    this.a = 7;
}
const v20 = new F16(48889, v15);
class C22 {
    valueOf(a24, a25) {
        a25(a24, a25, a24, a25, -7.723443359121103e+307);
    }
}
const v27 = new C22();
async function f28(a29, a30) {
    -7.723443359121103e+307 - v27;
    return a29;
}
f28();
new F16(7, v14);
new F16(7, v20);
function f35(a36, a37) {
    const o41 = {
        p(a39) {
            let v38 = this;
            ~(v38 = a36);
            return f35;
        },
    };
    return o41;
}
class C42 {
}
C42 **= C42;
