function f6(a7, a8, a9) {
    const o19 = {
        "a": 128n,
        ...a9,
        "h": -2143425121n,
        "e": 268435456,
        set d(a11) {
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a15;
            }
            new F12(a9, -2143425121n);
            new F12(-128, a9);
            new F12(27445, -2143425121n);
        },
    };
    return o19;
}
const v20 = f6(-128, 268435456, f6);
const v21 = f6(268435456, 27445, -49148n);
f6(v20, -128, v21);
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741823;
    this.e = a28;
    const v29 = new f6(27445, this, this);
    const v31 = Symbol.replace;
    v29[v31] = -2147483648;
    v21.e = v31;
    this.d = 268435441;
}
new F26(1073741823);
new F26(268435441);
const v34 = new F26(1073741823);
const v37 = new Uint8Array(1973);
new Int8Array(4);
new BigInt64Array(1400);
const v44 = v34.constructor;
class C45 extends v44 {
    a;
    static [v37];
}
new C45();
class C50 {
    constructor(a52, a53, a54) {
        F26 /= delete BigInt64Array[this];
    }
}
let v56 = new C50(5, -1981636549, false);
v56 = v44;
Int8Array & false;
