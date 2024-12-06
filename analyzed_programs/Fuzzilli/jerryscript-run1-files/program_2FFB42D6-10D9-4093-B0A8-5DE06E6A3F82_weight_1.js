const v4 = new WeakMap();
function f5() {
    return v4;
}
class C9 extends f5 {
    static m(a11, a12) {
        super.e = -9007199254740990n;
        v4.d = a11;
        v4.__proto__ = f5();
        return -10694;
    }
    static set f(a15) {
        const t12 = "set";
        t12[this] = v4["set"](a15, -9007199254740990n, ..."set", this, ..."set");
    }
}
new C9();
const v19 = new C9();
new C9();
Object.defineProperty(v19, -285207909n, { enumerable: true, set: f5 });
const v21 = C9 - v4;
function f25() {
    return WeakMap;
}
v4[v21] = f25;
v19.g >>>= -10694;
