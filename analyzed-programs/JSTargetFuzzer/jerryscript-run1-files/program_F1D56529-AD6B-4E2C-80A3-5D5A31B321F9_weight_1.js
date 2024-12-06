function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -14;
    this.c = -14;
    this.h = -14;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    valueOf(a8) {
        const v9 = (a10, a11, a12, a13) => {
            let v14;
            try { v14 = a8(a13, a12, a10); } catch (e) {}
            [v14,a8,a13,this,a12];
            return v14;
        };
        Object.defineProperty(a8, 8, { configurable: true, enumerable: true, value: a8 });
        try { this["p"](v4); } catch (e) {}
        new Uint16Array(1872);
        new Uint8ClampedArray(256);
        new Int8Array(2);
        return Int8Array;
    }
}
const v27 = new C6();
const v28 = new C6();
const v29 = new C6();
function F30(a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v3;
}
new F30(v28, v27, v4);
new F30(v27, v27, v4);
new F30(v5, v3, v29);
class C41 {
    constructor(a43) {
        ([-1000000.0,535179.2230165782,-2.2250738585072014e-308,-730.4166423777232,-0.0,1000000.0]).includes(a43);
    }
}
new C41(1073741824);
const v47 = new BigUint64Array(16);
v47.copyWithin();
let v49 = 1n;
v49 %= 2147483648n;
