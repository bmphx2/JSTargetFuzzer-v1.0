function f0() {
    const o8 = {
        "d": -1.6464179560150874e+308,
        set h(a5) {
            function f6() {
                return -4096;
            }
            const v7 = super.b;
            a5[1682846137] = -1.6464179560150874e+308;
            a5.__proto__ = v7;
        },
        "c": 1,
        "g": 1,
        __proto__: -1.6464179560150874e+308,
    };
    return o8;
}
f0();
f0();
f0();
function f15() {
    return 536870889n;
}
class C22 {
    static g = 16n;
    5;
    e;
}
new C22();
new C22();
const v25 = new C22();
try { v25.concat(); } catch (e) {}
Object.defineProperty(C22, "b", { writable: true, configurable: true, get: f15, set: f0 });
