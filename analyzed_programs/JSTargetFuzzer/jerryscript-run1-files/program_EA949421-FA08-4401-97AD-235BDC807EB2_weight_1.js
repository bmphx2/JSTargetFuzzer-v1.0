function f6(a7, a8) {
    const o16 = {
        "d": "kio",
        [a8](a10, a11, a12) {
            return a12 > a7;
        },
        "c": -455931208,
        set h(a15) {
            super.h = a8;
            const t9 = "kio";
            t9.__proto__ = "n";
        },
        "h": -455931208,
    };
    return o16;
}
const v17 = f6(-9223372036854775807, "kio");
const v18 = f6(-455931208, v17);
f6(0, "kio");
let v20 = -2;
const v23 = v18 % v17;
for (let v24 = 0; v24 < 32; v24++) {
    const t22 = "valueOf";
    t22["p" + v24] = v24;
}
[1689602587,..."n",0,v18,v23];
Object.defineProperty("valueOf", "h", { configurable: true, enumerable: true, get: f6, set: f6 });
v20 ^= 0;
