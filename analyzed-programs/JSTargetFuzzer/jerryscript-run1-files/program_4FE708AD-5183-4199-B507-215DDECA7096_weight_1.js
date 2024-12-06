function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 129;
    this.b = 129;
    function f3(a4, a5) {
        try { a4(a4); } catch (e) {}
        return 129;
    }
    f3(129, F0);
    this.h = 129;
}
const v8 = new F0();
const v9 = new F0();
const v10 = new F0();
function f11(a12, a13) {
    const o26 = {
        [a13](a15, a16, a17, a18) {
            let v21 = 0.0;
            const v22 = --v21;
            v10 && a18;
            v21 * -9;
            return Math.atanh(v22);
        },
        __proto__: a12,
        "c": a12,
        5: a12,
        "a": v8,
        "e": F0,
    };
    return o26;
}
f11(v8, v8);
const v28 = f11(v9, v9);
f11(v10, v9);
function f33() {
    return v28;
}
function f37() {
}
new Uint8Array(0);
let v51 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v53 = new Int32Array(127);
v51 /= v53;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
