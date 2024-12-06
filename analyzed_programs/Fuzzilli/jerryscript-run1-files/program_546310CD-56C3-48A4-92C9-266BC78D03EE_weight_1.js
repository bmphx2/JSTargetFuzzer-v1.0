function f3() {
    return "valueOf";
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
    this.g = a15;
}
const v16 = new F10(3, "valueOf", "p", "p");
new F10(1000, "valueOf", v16, "toString");
const v18 = new F10(-57456, "valueOf", "toString", "toString");
let v21 = 41888;
Math.log10(6);
Math.abs(-2147483649 << v21);
const v26 = ++v21;
v18["p"] = f3;
v26 * v21;
