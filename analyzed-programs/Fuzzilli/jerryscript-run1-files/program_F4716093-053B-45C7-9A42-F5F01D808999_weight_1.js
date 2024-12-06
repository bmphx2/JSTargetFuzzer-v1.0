function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v7 = new WeakMap();
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a10;
    this.d = a10;
}
const v13 = new F8(v5, v5, v7);
const v14 = new F8(v13, v13, v13);
const v15 = new F8(v5, v4, v3);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a18;
}
new F16(v5, v5, v13, v14);
new F16(v4, v15, v15, v14);
new F16(v14, v4, v5, v14);
let v25 = 0;
while (v25 < 9) {
    function f28() {
        return f0;
    }
    f28();
    v25++;
}
