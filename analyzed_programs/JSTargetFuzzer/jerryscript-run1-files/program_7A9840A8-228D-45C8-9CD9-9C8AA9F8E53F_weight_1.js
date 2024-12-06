let v2 = 4294967295;
function f3() {
    return 65535;
}
function f4() {
    return 512;
}
class C5 {
    constructor(a7) {
        ([65535,-Infinity]).indexOf();
    }
    p(a16) {
        if (f4) {
        } else {
            v2 = 512;
        }
        return 65535;
    }
}
const v20 = new C5(v2);
const v21 = new C5(v2, v20, v20, 512);
new C5(512);
function f23(a24, a25, a26, a27) {
    const o29 = {
        ...v2,
        ...a26,
        "h": 65535,
        ...v21,
        [a26]: 512,
        get f() {
            C5.__proto__ = f4;
            return this;
        },
        __proto__: v20,
        "g": v20,
        "f": a26,
        6: a26,
        "b": v2,
    };
    return o29;
}
const v30 = f23(65535, v2, v21, f23);
f23(65535, v2, f23(512, 512, v21, 65535), v30);
const v36 = [5.0,1e-15,2.220446049250313e-16,1000000.0,0.5723323906486542,-4.403875257453581e+307,144399.05661793612,0.021262399628389383,2.2250738585072014e-308,-1000000000000.0];
const v38 = new Int16Array();
const v41 = new Int8Array(257);
const o42 = {
};
new Proxy(v36, o42);
try { v38(...v41); } catch (e) {}
