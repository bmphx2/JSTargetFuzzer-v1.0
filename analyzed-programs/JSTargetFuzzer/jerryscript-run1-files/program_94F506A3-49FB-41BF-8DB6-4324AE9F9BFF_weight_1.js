function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = null;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6(a7, a8) {
    const o38 = {
        toString(a10, a11) {
            v3[9] = F1;
            a7.h;
            return a7;
        },
        "h": a7,
        [null]: null,
        n(a14, a15, a16, a17) {
            const v18 = (a19, a20, a21, a22) => {
                const v25 = new Uint8Array(1705);
                const o31 = {
                    m(a27, a28, a29) {
                        v25.fill();
                        return 1705;
                    },
                };
                o31.m;
                return Reflect.apply(v25);
            };
            return v5;
        },
    };
    return o38;
}
f6(v5, f6(v4, f6(v4, v3)));
new Uint8Array(10);
new Uint32Array(127);
new Int16Array(4);
Math.round(-2.220446049250313e-16);
