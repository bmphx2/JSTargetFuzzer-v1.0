function f3(a4, a5) {
    const o14 = {
        __proto__: a5,
        ...a5,
        set e(a7) {
            for (let v11 = 0; v11 < 32; v11++) {
                a7["p" + v11] = v11;
            }
        },
    };
    return o14;
}
f3(129, 536870889);
const v16 = f3(536870889, 129);
f3(129, 129);
let v19 = new Date();
v19 = v16;
2.0 % 2.0;
Math.cosh(-1334071234);
-(f3 | 2.0);
~f3;
-f3;
