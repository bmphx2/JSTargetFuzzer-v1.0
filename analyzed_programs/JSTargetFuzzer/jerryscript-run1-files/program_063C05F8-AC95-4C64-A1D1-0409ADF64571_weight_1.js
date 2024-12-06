function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
}
new F3(9223372036854775807, 1401360717);
const v8 = new F3(9223372036854775807, 1401360717);
new F3(v8, 2147483647);
new Float64Array(2148);
new Uint8ClampedArray(3576);
new Float64Array(824);
class C26 {
    constructor(a28) {
        ([-1000000.0,535179.2230165782,-2.2250738585072014e-308,-730.4166423777232,-0.0,1000000.0]).includes(a28);
    }
}
new C26(1073741824);
