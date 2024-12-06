function f3(a4) {
    const o14 = {
        4294967295: "p",
        set f(a6) {
            const v11 = !-2147483649;
            a4++;
            Math.exp(v11);
        },
        __proto__: "source",
        "d": "source",
        "h": "p",
    };
    return o14;
}
const v15 = f3("source");
const v16 = f3(f3);
const t15 = f3("source");
t15.f = "source";
class C28 extends v15.constructor {
    #c = v16;
    a;
    #a = v15;
}
new C28();
