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
delete v9[f0];
(F4 | -256) + f0;
new WeakSet();
const v21 = new F11(47418, v10, v10);
const v22 = new F11(47418, v21, v21, f0, v9, -2147483647);
new F11(47418, v21, v22);
const o24 = {
};
class C26 extends o24.constructor {
}
if (!268435439) {
    for (let v28 = 0; v28 < 5; v28++) {
        for (const v30 in C26()) {
        }
    }
    class C31 {
    }
}
