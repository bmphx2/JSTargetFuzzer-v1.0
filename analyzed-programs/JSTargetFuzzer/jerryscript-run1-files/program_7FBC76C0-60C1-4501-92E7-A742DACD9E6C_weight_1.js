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
function f17(a18, a19, a20, a21) {
    const o29 = {
        __proto__: v3,
        ...a21,
        [2.220446049250313e-16]: a19,
        get b() {
            for (let v23 = 0; v23 < 32; v23++) {
                v5["p" + v23] = 2.220446049250313e-16;
            }
            return f0;
        },
        "d": v5,
        get a() {
            a19 = this();
            return super.n();
        },
        [F1]: a18,
        [f17]: a21,
    };
    return a19;
}
f17(f17(2.220446049250313e-16, v4, f17, v3), v3, f17, v5);
f17(f6, v5, v3, v5);
-2147483649n >> 0n;
