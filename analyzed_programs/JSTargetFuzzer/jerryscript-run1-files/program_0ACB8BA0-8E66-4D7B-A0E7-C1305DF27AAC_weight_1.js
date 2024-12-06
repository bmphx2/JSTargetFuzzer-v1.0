function f3() {
    return 1073741824;
}
new Array(1000);
function f7() {
    return -1;
}
let v9 = 16;
new Array(v9);
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1;
}
new F11(1073741824, -1, 16);
new F11(1000, -1, 16);
let v18 = 0;
const v19 = v18++;
function F20() {
    if (!new.target) { throw 'must be called with new'; }
}
class C22 extends F20 {
    static [v19] = v19;
    constructor(a24, a25, a26, a27) {
    }
}
const v29 = new Uint8ClampedArray(C22);
const v30 = new F11(1000, 1073741824, -1);
class C31 {
    constructor(a33) {
        ("number").search(a33);
        try { new C31(); } catch (e) {}
    }
}
const v37 = new C31(C31);
try { v37.m(v29, C31); } catch (e) {}
f3();
++v9;
1000 ^ v30;
