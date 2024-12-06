function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1385155076;
}
new F0();
const v4 = new F0();
new F0();
let v6 = [75.47324089533231,1.7023395173568456,87254.04452517442];
const v7 = [-1.0,-897.5880916451329,2.2250738585072014e-308,-0.0,-2.220446049250313e-16];
const v8 = [1000000000000.0,-2.0,1000.0,-6.127745171768887e+307];
function f12(a13, a14, a15, a16) {
    const o44 = {
        ...v4,
        set h(a18) {
            let v24 = --v6;
            let v25 = ++v24;
            Object.defineProperty(this, "g", { value: --v25 });
            const v29 = new Uint32Array(858);
            const v30 = new a15();
            const o37 = {
                p(a32, a33, a34) {
                    return eval(a32);
                },
            };
            for (const v38 in v29) {
                const v40 = [v38];
                Reflect.apply(o37.m, v30, v40);
            }
        },
        "c": a15,
        "h": a15,
        "d": a16,
        ...v8,
    };
    return o44;
}
f12(-1e-15, v7, 0.0, F0);
f12(0.0, v8, 2.220446049250313e-16, f12(2.220446049250313e-16, v7, 0.0, F0));
([0.0]).sort();
