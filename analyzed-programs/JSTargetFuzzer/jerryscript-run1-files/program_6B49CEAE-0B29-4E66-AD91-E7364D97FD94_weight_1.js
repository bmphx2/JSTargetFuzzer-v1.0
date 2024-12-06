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
const v11 = f2(f2, WeakMap);
f2(f2, v11);
f2(v1, f2);
function f21() {
    return "12";
}
[v11["C"],"C","sGpN"];
[f2,["p",v11,"boolean","p"]];
f2 | "number";
const v27 = f21();
class C28 extends f21 {
}
const v29 = new C28();
v27 <= v29;
