function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 63391;
}
const v3 = new F0();
const v4 = new F0();
new F0();
class C6 {
    g;
    valueOf(a8) {
        const o9 = {
        };
        new Proxy(this, o9);
        return v4;
    }
    constructor(a13, a14) {
        let v18 = 206.24347253464384;
        --v18;
        ++a14;
        Math.acosh(v3 >>> -128);
    }
}
const v23 = new C6(v3, v3);
const v24 = new C6(F0, v4);
new C6(v24, v23);
new WeakSet();
class C32 {
    valueOf(a34, a35) {
        a35(a34, a35, a34, a35, -7.723443359121103e+307);
    }
}
const v37 = new C32();
async function f38(a39, a40) {
    return -7.723443359121103e+307 - v37;
}
f38();
