function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1178325743;
    this.a = 1178325743;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new Array(1024);
function f9(a10, a11, a12) {
    const o21 = {
        __proto__: Array,
        [v3]: v5,
        "c": a12,
        [F0]: v8,
        [Array]: a11,
        set a(a14) {
            try { this["toString"]("toString", Array, this, a10); } catch (e) {}
            super.b = "toString";
            a11--;
        },
    };
    return o21;
}
f9(v5, v4, 1024);
f9(v4, v4, v3);
f9(v3, v5, 1024);
new Float64Array(222);
new Float64Array(127);
new Float64Array(8);
function f34(a35) {
    return a35;
}
class C36 extends f34 {
    [v5];
    a;
    static [F0];
}
Object.defineProperty(v4, 1, { enumerable: true, get: f34, set: f9 });
v5[Symbol.species];
