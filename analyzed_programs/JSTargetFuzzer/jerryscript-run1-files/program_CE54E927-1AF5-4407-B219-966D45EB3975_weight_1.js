const v3 = [5,5,5,1024];
const v4 = [v3,1024,v3,v3,1024];
const v5 = [1024,v4,v4];
function f9(a10, a11, a12) {
    const o16 = {
        set e(a14) {
            function f15() {
                return 12539;
            }
        },
        ...v3,
        "g": a10,
        "a": -1024,
        "f": v3,
        [1024]: a12,
        "c": 9007199254740991,
        "b": v5,
        __proto__: v4,
        [v5]: 5,
        "h": a10,
    };
    return a10;
}
f9(-1024, v4, 5);
f9(-9223372036854775808, v3, 5);
const v19 = f9(f9, v4, 1024);
class C20 {
    constructor(a22, a23, a24, a25) {
        arguments && a23;
    }
}
const o28 = {
    [9007199254740991]: f9,
    "b": v19,
};
-9223372036854775808 % v19;
new C20(C20, C20, C20, C20);
for (let i = 0; i < 5; i++) {
    eval(C20);
}
