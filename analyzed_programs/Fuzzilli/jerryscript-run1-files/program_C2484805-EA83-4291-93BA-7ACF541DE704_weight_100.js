function f1() {
    const o7 = {
        "h": undefined,
        5: undefined,
        139: undefined,
        "d": undefined,
        set a(a3) {
            a3.h = 268435440;
        },
        "c": undefined,
        ...undefined,
    };
    return o7;
}
f1();
f1();
const v10 = f1();
const o22 = {
    "h": 2,
    get h() {
        return v10;
    },
};
o22.h;
