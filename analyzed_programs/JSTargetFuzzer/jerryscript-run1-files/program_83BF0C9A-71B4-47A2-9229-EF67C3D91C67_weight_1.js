function f3() {
    return -1n;
}
class C4 extends f3 {
    valueOf(a6, a7) {
        let v8;
        try { v8 = this.getUint8(a6, -1n); } catch (e) {}
        let v9;
        try { v9 = v8(268435440n, a6); } catch (e) {}
        Object.defineProperty(v9, "a", { configurable: true, set: f3 });
        let v13;
        try { v13 = new v9(-1956501316, -1n, v8, v9, 268435440n); } catch (e) {}
        return v13;
    }
    a;
    static 2;
    static [f3];
}
new C4();
new C4();
new C4();
function f18(a19, a20, a21, a22) {
    const o23 = {
        ...eval,
    };
    return o23;
}
new Uint8Array(128);
new Float64Array(8);
new BigUint64Array(1442);
function f39(a40, a41) {
    const o64 = {
        ...a41,
        "c": a41,
        "b": 1073741824,
        "e": a41,
        __proto__: a41,
        [3](a43, a44, a45) {
            try {
                super.m(a41, a43, a45, a43);
            } catch(e47) {
                function F50(a52, a53) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v57 = new Int8Array(255);
                ("bigint").lastIndexOf(...v57);
                const v59 = 1504763060 % a43;
                Math.log10(v59 * v59);
                1504763060 + v59;
            }
            const v63 = this[8];
            a40 **= -33749;
            return v63;
        },
    };
    return o64;
}
f39(10000, 512);
f39(-33749, f39);
f39(3, f39);
function F68(a70, a71) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a71;
}
new F68(10000, 3);
const v73 = new F68(512, 22165);
new F68(1073741824, 3);
delete v73[1509295508];
Math.sinh(F68);
Math.sinh(10000);
const v85 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v85);
