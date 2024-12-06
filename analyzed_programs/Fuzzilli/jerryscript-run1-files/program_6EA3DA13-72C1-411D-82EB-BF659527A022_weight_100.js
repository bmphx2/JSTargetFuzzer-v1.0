class C3 {
    [14315];
    2169129696;
    static p(a5) {
        this.d *= a5;
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = 14315;
        }
        new F6(a5, a5);
        new F6(14315, a5);
        new F6(a5, a5);
        return a5;
    }
    1 = 14315;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f16(a17, a18, a19) {
    const o28 = {
        __proto__: v15,
        [v15](a21, a22, a23, a24) {
            return a18;
        },
        ...v14,
        "c": 1874844780,
        "f": 14315,
        ...C3,
        "e": 9,
        [C3]: a19,
    };
    return o28;
}
f16(1874844780, 14315, 1874844780);
f16(9, 14315, 1874844780);
const v31 = f16(1874844780, 1874844780, 9);
new f16(1874844780, 14315, 14315);
v31[C3];
function f37(a38) {
    return a38;
}
class C39 extends f37 {
    static #c;
    [v13];
    [v15] = v15;
}
