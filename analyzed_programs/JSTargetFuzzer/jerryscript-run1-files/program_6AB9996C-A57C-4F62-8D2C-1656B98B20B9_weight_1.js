function f3(a4, a5) {
    const o10 = {
        ...a4,
        "b": 7,
        get f() {
            return 1073741824;
        },
        256: 268435439,
        __proto__: a5,
    };
    return o10;
}
const v11 = f3(7, 268435440);
f3(f3, 7);
f3(268435439, 7);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v11;
    a18.e = a17;
}
new F14(268435440, 7, 268435440);
new F14(268435440, 268435439, 7);
new F14(268435439, 268435439, 268435439);
const v23 = new BigUint64Array();
try { v23.set(); } catch (e) {}
