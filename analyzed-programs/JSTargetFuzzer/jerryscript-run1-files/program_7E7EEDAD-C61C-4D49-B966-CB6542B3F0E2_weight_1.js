let v1 = -10n;
function f3(a4) {
    const o9 = {
        ...-9223372036854775808n,
        set d(a6) {
            a6[this] = this;
            this[1] = v1;
        },
        "c": a4,
        [a4]: a4,
        get e() {
            ~a4;
            return v1;
        },
        "b": v1,
        10: a4,
        "f": f3,
        [10n]: a4,
        __proto__: 10n,
        "g": 10n,
    };
    return o9;
}
const v10 = f3(-9223372036854775808n);
const v11 = f3(v1);
f3(10n);
new BigUint64Array(3);
new Int32Array(97);
new Float64Array(1265);
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 97;
    this.a = 10n;
    this.b = a25;
}
new F23(v1, v10);
new F23(-9223372036854775808n, v11);
new F23(10n, v10);
1073741824n >> ++v1;
