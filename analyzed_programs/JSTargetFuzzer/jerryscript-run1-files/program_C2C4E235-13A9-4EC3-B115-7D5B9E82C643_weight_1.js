function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.h = f0;
    this.a = f0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
function f9(a10, a11, a12, a13) {
    const o32 = {
        ...a13,
        1073741824: v5,
        [a13]: a13,
        set c(a15) {
            a10.length = 10;
            ["isConcatSpreadable",a11,a12,a15,F1];
            [v3,a10,["getMonth"],a15];
        },
        p(a21, a22, a23) {
            -a23;
            F1 * -65535;
            a21 * a21;
            F1 & F1;
            return Math.random();
        },
    };
    return a13;
}
f9("getMonth", f9("getMonth", f9, v3, "getMonth"), v5, "-128");
f9("getMonth", f9, v5, "isConcatSpreadable");
/a|bc+/y.exec();
