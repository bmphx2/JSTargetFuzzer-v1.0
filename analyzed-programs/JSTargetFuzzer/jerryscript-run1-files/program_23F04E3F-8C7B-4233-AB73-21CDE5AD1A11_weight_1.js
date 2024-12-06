new Set();
class C5 extends Set {
    static get d() {
        for (let v7 = 0; v7 < 82; v7++) {
            v7 << this;
        }
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a13;
        }
        const v15 = new F9(36130, 9223372036854775807, 9223372036854775807, 9223372036854775807);
        new F9(9223372036854775807, 0, 9223372036854775807, 36130);
        v15.length = -1;
        new F9(36130, 9223372036854775807, 0, 9223372036854775807);
        return this;
    }
}
new C5();
new C5();
new C5();
function f26() {
    return 0;
}
new Int16Array(255);
const v35 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f39(a40, a41) {
    const o62 = {
        174: a40,
        "c": v35,
        65536: a40,
        "e": v35,
        set f(a43) {
            let v44;
            try { v44 = a43(Int16Array, a43, a43, this); } catch (e) {}
            new Uint8ClampedArray(2);
            const v50 = new Uint16Array(341);
            function f51(a52, a53, a54) {
                let [v55,,v56,v57] = v50;
                return a41;
            }
            f51(2.220446049250313e-16, 36130, v44);
            new Int16Array(16);
        },
    };
    return o62;
}
f39(5, 255);
const v64 = f39(255, 257);
f39(257, 255);
const v66 = new Uint8Array(257, 257, 255);
let v67;
try { v67 = v66.includes(v66); } catch (e) {}
Object.defineProperty(v64, 257, { enumerable: true, get: f39 });
for (let v68 = 0; v68 < 32; v68++) {
    v35["p" + v68] = v68;
}
v35[3];
try { v67["p"](Int16Array); } catch (e) {}
