function f0() {
}
class C4 {
    static m(a6, a7, a8) {
    }
}
let v9 = new C4();
let v10;
try { v10 = C4(); } catch (e) {}
let v11;
try { v11 = v10(); } catch (e) {}
v9 -= v11;
function f12(a13, a14) {
    const o26 = {
        [f0](a16, a17, a18, a19) {
            const t15 = a14 >> (this / -2147483649);
            t15[8] = a18;
            return a13;
        },
        __proto__: a13,
        get b() {
            for (let v23 = 0; v23 < 32; v23++) {
                this[this + v23] = v23;
            }
            return 1554722078;
        },
    };
    return a13;
}
f12(-2147483649, 1073741824);
f12(1073741824, -2147483649);
f12(-2147483649, 1554722078);
new Set();
const v40 = new Int32Array(6);
new ArrayBuffer(v40);
