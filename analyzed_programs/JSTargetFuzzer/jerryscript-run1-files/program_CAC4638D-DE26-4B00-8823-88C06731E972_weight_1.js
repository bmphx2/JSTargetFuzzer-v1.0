function f6(a7, a8, a9) {
    const o57 = {
        valueOf(a11, a12, a13, a14) {
            for (let i17 = 0, i18 = 10;
                (() => {
                    function f19() {
                    }
                    class C23 extends f19 {
                        m(a25, a26, a27) {
                        }
                        static valueOf(a29, a30) {
                            this.__proto__;
                        }
                        [-1.4595195288430762];
                    }
                    new Float64Array(256, 256, 256);
                    const v37 = new Uint8Array();
                    let v38;
                    try { v38 = v37.subarray(); } catch (e) {}
                    for (let v39 = 0; v39 < 5; v39++) {
                        "p" + v39;
                    }
                    function F42(a44, a45, a46) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.h = v37;
                        this.c = a45;
                    }
                    const v47 = new F42(256, -4.0, -2.6803485704585965e+306);
                    new F42(8, v47, v38);
                    return i17 < i18;
                })();
                i17++, i18--) {
                try { new a13(a14); } catch (e) {}
            }
            return a12;
        },
    };
    return o57;
}
f6(-2.2250738585072014e-308, 0.5324211072661679, 1.6746343712155505e+308);
f6(1.7976931348623157e+308, 1000000.0, 1.6746343712155505e+308);
f6(1.6746343712155505e+308, -2.2250738585072014e-308, 1.6746343712155505e+308);
function f64() {
    return f6;
}
const v66 = new Int16Array();
const o67 = {
};
async function f68(a69, a70, a71) {
    Object.defineProperty(o67, "a", { writable: true, configurable: true, get: v66 });
    return a69;
}
f68(Int16Array, Int16Array, f68);
