const v10 = new Date();
const v11 = 2147483647n >>> 14n;
v10.d = 2147483647n;
Date.__proto__ = v10;
function f12(a13, a14, a15) {
    const o19 = {
        set h(a17) {
            this.a;
        },
        [14n]: a13,
        9: a13,
    };
    return o19;
}
const v20 = f12(f12, 6n, -22683n);
f12(129n, 129n, -22683n);
f12(v20, 1000n, v11);
