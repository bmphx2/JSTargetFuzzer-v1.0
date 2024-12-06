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
        [v3](a11, a12, a13) {
            Object.defineProperty(this, v5, { configurable: true, enumerable: true, get: f6, set: f6 });
            return this;
        },
        "h": v4,
        16: a7,
        1: v4,
        1073741823: a8,
    };
    return o14;
}
const v15 = f6(v5, v3);
v3[256] = v15;
const v16 = [-26195];
[4294967295,-2,1000,-58055,-65536,-2147483647,16,1138383185,536870912];
const v18 = [128];
const v19 = v18[v4];
v18[Symbol.split];
v19 >> v18;
v15.__proto__ = v16;
f6(v15, v3);
f6(v5, v4);
const v34 = new Int32Array(585);
try { v34.some(WeakMap); } catch (e) {}
