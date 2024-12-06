function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 12;
}
const v3 = new F0();
new F0();
new F0();
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741823;
    this.e = a17;
    this.d = 268435441;
}
new F15(v3);
new F15(268435441);
new F15(1073741823);
new Uint8Array(1973);
new Int8Array(4);
new BigInt64Array(1400);
class C33 {
    constructor(a35, a36, a37) {
        F15 /= delete BigInt64Array[this];
    }
}
new C33(5, -1981636549, false);
