class C3 {
    m(a5, a6) {
        a6[4] = a5;
        return 0.5314671834059134;
    }
    static ["b"] = "b";
    static h;
    static #c = "b";
    static #b = 0.5314671834059134;
    h;
    static b;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
class C13 extends C3 {
    static n(a15, a16, a17, a18) {
        return null;
    }
    m(a25, a26, a27, a28) {
        this instanceof C3;
        const v31 = [a28,a26];
        const v33 = Reflect.apply(v10.m, a26, v31);
        try { v33.m(); } catch (e) {}
        return -925052.1990630669;
    }
}
const v35 = new C13();
const v36 = new C13();
new C13();
function f38(a39, a40, a41, a42) {
    const o52 = {
        "f": a39,
        set a(a44) {
            v36.d = a42;
            super.c = 0.5314671834059134;
        },
        get a() {
            class C50 extends a40.constructor {
                static #c;
                6;
                f;
            }
            new C50();
            return a40;
        },
    };
    return o52;
}
f38(v36, v11, v12, v11);
f38(v36, v36, v36, v11);
const v55 = f38(v10, v35, v35, v36);
try { v55["includes"]("b"); } catch (e) {}
v55[230] = 4294967295;
