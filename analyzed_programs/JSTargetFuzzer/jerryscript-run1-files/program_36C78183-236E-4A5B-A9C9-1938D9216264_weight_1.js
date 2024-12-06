function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
}
new F4(-256, -256);
const v9 = new F4(-2147483647, -2147483647);
const v10 = new F4(-2147483647, -256);
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F4;
    this.a = a14;
    this.f = v10;
}
const v16 = new F11(47418, v10, v10);
const v17 = new F11(47418, v16, v16, f0, v9, -2147483647);
new F11(47418, v16, v17);
const o19 = {
};
class C21 extends o19.constructor {
}
if (!268435439) {
    for (let v23 = 0; v23 < 5; v23++) {
        for (const v25 in C21()) {
        }
    }
    class C26 {
    }
}
