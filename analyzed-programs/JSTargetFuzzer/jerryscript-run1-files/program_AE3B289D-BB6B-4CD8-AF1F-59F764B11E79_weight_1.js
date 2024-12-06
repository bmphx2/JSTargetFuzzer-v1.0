/{,}/i;
const v4 = /D/gisum;
const v5 = /66A/gyu;
function f6(a7, a8, a9) {
    const o15 = {
        [a8]: a7,
        "c": v5,
        10: a9,
        ...v5,
        ...a9,
        set d(a11) {
            a9 ^ a9;
            let v13;
            try { v13 = a11("-4096", this, a9, a8, "symbol"); } catch (e) {}
            a9[v13];
        },
    };
    return o15;
}
f6("object", "symbol", v4, "object", v5);
f6("symbol", "symbol", v4);
f6("-4096", v4, v4);
function f19() {
    return f19;
}
class C20 extends f19 {
}
try {
    function f21() {
        return C20;
    }
    function f22(a23, a24, a25, a26) {
        const o27 = {
            "construct": f21,
        };
        return a24;
    }
} finally {
}
