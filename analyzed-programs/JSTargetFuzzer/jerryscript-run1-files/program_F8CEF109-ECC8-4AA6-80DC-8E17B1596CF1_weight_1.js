function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 0;
    this.c = 0;
    this.g = 0;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a9;
    this.e = a8;
}
const v10 = new F6(v3, F6);
new F6(v3, v10);
new F6(v3, v4);
function f13() {
    return v10;
}
let v19 = 268435439;
(-4294967295) ** --v19;
Math.min(-1000000000.0);
