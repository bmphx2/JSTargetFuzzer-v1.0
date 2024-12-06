function f0() {
}
function f1() {
    return f0;
}
const v6 = new Float32Array(1);
v6.sort();
const v9 = [-2.220446049250313e-16,f0,-2.220446049250313e-16,-2.2250738585072014e-308];
[1.6954713495392096e+308,-2.2250738585072014e-308,v9];
[-2.2250738585072014e-308,v9,f0,-2.220446049250313e-16];
function f12(a13, a14) {
    const o28 = {
        p(a16, a17, a18) {
            const v19 = a18.__proto__;
            try { new a14(v19, -2.2250738585072014e-308, v19, a18, v19); } catch (e) {}
            const o23 = {
                "maxByteLength": 268435440,
            };
            const v25 = new ArrayBuffer(512, o23);
            new Uint8ClampedArray(v25);
            return a13;
        },
    };
    return o28;
}
f12(-2.220446049250313e-16, 1.6954713495392096e+308);
f12(-2.220446049250313e-16, f1);
f12(-2.2250738585072014e-308, f12);
RegExp(RegExp);
