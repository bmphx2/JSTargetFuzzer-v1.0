function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -4294967295;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o14 = {
        2: v5,
        "g": F0,
        [a7]: v4,
        __proto__: v4,
        [F0]: a8,
        "a": a8,
        "e": F0,
        get b() {
            v5.valueOf = f6;
            return this;
        },
        "b": F0,
        ...v5,
        [v5]: a7,
        [a8](a11, a12, a13) {
            Object.defineProperty(this, v5, { configurable: true, enumerable: true, get: f6, set: f6 });
            return this;
        },
        "h": a8,
        16: a7,
        1: v4,
        1073741823: a8,
    };
    return o14;
}
f6(f6(v5, v3), v3);
f6(v5, v4);
const v26 = new Int32Array(585);
try { v26.some(WeakMap); } catch (e) {}
