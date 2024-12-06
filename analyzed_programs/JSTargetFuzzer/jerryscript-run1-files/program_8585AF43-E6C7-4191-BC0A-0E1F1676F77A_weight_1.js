function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -1;
    let v3 = 0;
    do {
        Object.defineProperty(this, "a", { value: this });
        let v6 = 9223372036854775807;
        const v8 = --v6;
        const v9 = !11;
        Math.imul(11, 11);
        Math.imul(v8 && v9, -1);
        Math.acosh(v6);
        v3++;
    } while (v3 < 7)
}
new F0();
const v18 = new F0();
const v19 = new F0();
new Float32Array(8);
v18[v19] = v19;
const v29 = +268435456;
Math.log10(268435456);
-1.7976931348623157e+308 && v29;
Math.clz32(-1.7976931348623157e+308);
Math.random();
new Float64Array(3349);
new Int16Array(13);
[1073741824,-5,-15,1735275355,-22345];
[0,-16,-1,-65537,-2147483647,9007199254740991];
[129,1,-6,-360230637,9007199254740991,128,58840,268435456,-5];
function F41() {
    if (!new.target) { throw 'must be called with new'; }
}
class C43 extends F41 {
    constructor(a45, a46, a47) {
        super();
        this.__proto__ = F41;
    }
}
new C43(F41, F41, C43);
