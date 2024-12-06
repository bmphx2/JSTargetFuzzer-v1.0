const v1 = [2.2250738585072014e-308,-6.675879358569281,502.7171285795314,0.9539132989379491];
v1.length %= [Infinity];
let v7 = 26580;
function f8(a9, a10) {
    const o13 = {
        "f": 10000,
        ...a9,
        "e": -11n,
        set d(a12) {
            let v11 = this;
            [a10,v7,v11] = a12;
            v11.d = v7;
        },
        1: v1,
        [a10]: -11n,
        ...a9,
    };
    return -11n;
}
const v14 = f8(3, -11n);
f8(10000, 10000n);
f8(-11n, 268435439n);
Math.fround(Math) < v14;
