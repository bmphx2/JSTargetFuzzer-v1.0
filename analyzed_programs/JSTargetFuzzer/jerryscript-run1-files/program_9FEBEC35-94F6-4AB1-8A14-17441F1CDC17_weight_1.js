function f3(a4, a5) {
    const o8 = {
        get f() {
            try { a4(this, "-128"); } catch (e) {}
            a5.__proto__ = this;
            return "65535";
        },
        ["-128"]: a5,
        [a4]: f3,
        "b": f3,
        "c": "65535",
        "e": f3,
        10: "f",
        ...a5,
        128: "65535",
        __proto__: "f",
        "d": "-128",
    };
    return o8;
}
f3(f3, "-128");
f3(f3(f3, "65535"), "f");
function f15() {
}
async function f20(a21, a22) {
    function F23(a25, a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        F23();
    }
    class C29 extends F23 {
        constructor(a31, a32, a33) {
            super();
        }
    }
    new C29(C29, F23, a22);
    return C29;
}
new Uint8Array(0);
let v44 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v46 = new Int32Array(127);
v44 /= v46;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
