function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.c = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f6() {
    Object.defineProperty([-9007199254740991,54726,1717830925,31978,16,4294967297,-28128,-15,-806491297,127], 256, { writable: true, configurable: true, enumerable: true, value: [0.6476119767844933,-2.0] });
    Number(536870887n);
    return F1;
}
function f13() {
    return undefined;
}
let v15 = 0;
while (v15 < 8) {
    f6();
    const t20 = v3.c;
    t20.__proto__ = v4;
    v15++;
}
function f23(a24, a25, a26, a27) {
    const o42 = {
        __proto__: v3,
        ...a27,
        [2.220446049250313e-16]: a25,
        get b() {
            let v28 = this;
            v28 &= v28;
            const v29 = delete v3[a26];
            let [,,v31,v32] = f23(-1.4293137789658912e+308, v29, v29, F1);
            for (let v36 = 0; v36 < 32; v36++) {
                v5["p" + v36] = 2.220446049250313e-16;
            }
            return f0;
        },
        "d": v5,
        get a() {
            a25 = this();
            return super.n();
        },
        [F1]: a24,
        [f23]: a27,
    };
    return a25;
}
f23(f23(2.220446049250313e-16, v4, f23, v3), v3, f23, v5);
f23(f6, v5, v3, v5);
-2147483649n >> 0n;
