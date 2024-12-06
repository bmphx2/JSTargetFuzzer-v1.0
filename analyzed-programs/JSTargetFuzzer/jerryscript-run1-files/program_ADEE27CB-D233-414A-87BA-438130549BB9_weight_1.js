const v1 = new WeakMap();
function f2(a3, a4) {
    const o10 = {
        __proto__: a4,
        "e": v1,
        get h() {
            class C6 {
                [a3] = C6;
                [this] = a3;
            }
            new C6();
            new C6();
            new C6();
            return v1;
        },
    };
    return o10;
}
f2(f2, f2(f2, WeakMap));
f2(v1, f2);
function f21() {
    return "12";
}
const v22 = f21();
class C23 extends f21 {
}
const v24 = new C23();
v22 <= v24;
