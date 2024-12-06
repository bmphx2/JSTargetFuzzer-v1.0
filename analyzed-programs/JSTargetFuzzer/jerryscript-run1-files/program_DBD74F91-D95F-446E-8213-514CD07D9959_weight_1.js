function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 268435439;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12) {
    a10 in a12;
    v3.f = a12;
    function f14() {
        return a10;
    }
    const o23 = {
        "g": 257n,
        __proto__: v5,
        [-1758478210n](a16, a17) {
            let v18;
            try { v18 = this.hypot(a12); } catch (e) {}
            try { v18(v18, f14, a16, a10); } catch (e) {}
            a17.d = a10;
            return v4;
        },
        [257n]: a10,
        ...a11,
        "f": a11,
        "a": v3,
    };
    return o23;
}
const v25 = f9(-1073741824n, v4, f9(-1073741824n, v5, v5));
const v26 = f9(-1073741824n, v4, v3);
const v29 = new Int16Array(1);
v25[5] <<= -128;
v26[f9] = 1;
v29.fill();
