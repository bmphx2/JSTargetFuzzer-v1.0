function f3(a4, a5) {
    const o8 = {
        get f() {
            try { a4(this, "-128"); } catch (e) {}
            a5.__proto__ = this;
            return "65535";
        },
        ["-128"]: a5,
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
new Uint8Array(0);
let v29 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v31 = new Int32Array(127);
v29 /= v31;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
