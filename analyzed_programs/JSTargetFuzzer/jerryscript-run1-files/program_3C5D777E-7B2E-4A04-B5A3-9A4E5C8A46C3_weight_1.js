function f0() {
    const o12 = {
        ...-128,
        set e(a5) {
            typeof -128 === "object";
        },
        [-128]: -934,
        "f": 467,
        __proto__: 467,
        [467]: -128,
        ...-934,
        "b": -934,
    };
    return o12;
}
const v13 = f0();
const v14 = f0();
const v15 = f0();
function F19(a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v15;
}
new F19(f0, v13, 2147483649);
new F19(v13, v14, 2147483649);
new F19(f0, v14, 2147483648);
Math.sign();
