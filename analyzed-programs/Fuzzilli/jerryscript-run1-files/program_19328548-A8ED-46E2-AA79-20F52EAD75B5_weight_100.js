function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 4096;
    this.h = 4096;
    this.e = 4096;
}
const v3 = new F0();
let v4 = new F0();
const v5 = new F0();
function f9(a10, a11) {
    const o13 = {
        ...a11,
        "f": a11,
        get b() {
            this[this] = a10;
            v3[a11] = a10;
            a11 = v3;
            v4 ^= v3;
            return this;
        },
        "b": a11,
        [-16]: v4,
        __proto__: a11,
        "a": a11,
    };
    return o13;
}
const v14 = f9(v4, v5);
f9(2, v4);
f9(2, v3);
v14.__proto__;
Object.defineProperty(v3, "c", { writable: true, configurable: true, get: f9 });
class C23 extends FinalizationRegistry {
    static 1788930723;
    static [v4];
    [v4];
    static [2];
}
new C23();
new C23();
new C23();
