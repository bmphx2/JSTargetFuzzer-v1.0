function f0() {
}
for (let i7 = 0, i8 = 10; i7 < i8; i7++, i8--) {
    function F16(a18, a19, a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        this.e = i7;
        this.f = -36323;
    }
    new F16(-9223372036854775808, i7, -36323, i8);
    new F16(i8, -36323, -9223372036854775808, i8);
    new F16(i7, i8, 6, 6);
}
new WeakSet();
function f29() {
    return 1e-15;
}
const v31 = new Set();
for (let i34 = 0, i35 = 10; i34 < i35; i34++, i35--) {
    ({"size":i34,...i35} = v31);
    const o43 = {
        "apply": f0,
        "getPrototypeOf": f29,
        "set": f29,
    };
    new Proxy(v31, o43);
}
v31.delete(v31["add"]());
