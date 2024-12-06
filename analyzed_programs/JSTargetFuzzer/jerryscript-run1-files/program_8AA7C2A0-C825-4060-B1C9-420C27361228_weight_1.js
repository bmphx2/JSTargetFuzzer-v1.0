function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -6;
    this.h = -6;
}
new F0();
new F0();
new F0();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
class C15 extends F10 {
    constructor(a17, a18, a19) {
        super(a17, 0.7028256232240996);
    }
}
new WeakMap();
function f27() {
    return WeakMap;
}
new Int8Array(5);
new Function(190);
new Float32Array(127);
function f43(a44, a45) {
    const o52 = {
        get h() {
            this[803142468] = a44;
            try { a45(a45, a45); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a49) {
            this[a49] *= 803142468;
            [] = 39946;
            const v50 = super.a;
            let v51;
            try { v51 = new v50(v50, a49, a49, 190); } catch (e) {}
            v51[2147483648] = v51;
            return a49;
        },
    };
    return o52;
}
const v53 = f43(39946, 803142468);
f43(255, 803142468);
f43(255, 803142468);
Array(257).shift();
const v65 = new BigUint64Array(16);
let v67 = 3413;
--v67;
let v69 = 1000;
++v69;
Symbol.iterator;
const v74 = new Float32Array(3007);
const v77 = new Float32Array(3);
Object.defineProperty(v65, "byteOffset", { configurable: true, value: v77 });
v74[v77];
let v79 = v74[2936874794];
v53.g = -1024;
let v82 = --v79;
const v83 = v53 | v82;
const v84 = v53 ** v79;
!v83;
Math.clz32(v84);
--v82;
~v84;
