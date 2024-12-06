function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870887;
    this.e = 536870887;
    const v3 = [-4294967295,-6,127,9223372036854775807,257,531686117];
    for (let v4 = 0; v4 < 5; v4++) {
        v3.lastIndexOf(v4);
    }
}
const v6 = new F0();
const v7 = new F0();
const v8 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    v6.c = v7;
    this.d = F0;
}
const v13 = new F9(F0, v8);
new F9(v6, v8);
new F9(v8, v13);
function F20(a22, a23, a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    a22.__proto__ = this;
}
new F20(Uint16Array);
2.0 > Uint8Array;
const v31 = ("n").matchAll("n");
try { ("a").codePointAt(v31); } catch (e) {}
new Uint32Array(3164);
